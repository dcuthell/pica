import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaArtistBlock from '../PicaArtistBlock'

class PicaArtistQuery extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeIndex: 100,
      lastIndex: 0,
      cardOpen: false
    }
    this.setOpen = this.setOpen.bind(this)
    this.setClose = this.setClose.bind(this)
    this.getSearchType = this.getSearchType.bind(this)
  }

  setOpen(index) {
    this.setState({
      cardOpen: true,
      activeIndex: index
    })
  }
  setClose(index) {
    this.setState({
      cardOpen: false,
      lastIndex: index
    })
  }

  getSearchType(){
    if (this.props.searchType === 'letter'){
      return gql`
      query ArtistswithPrograms($searchTerm : String, $sTerm : String){
        artists(where: {OR: [{name_starts_with: $searchTerm}, {name_contains: $sTerm}]}, orderBy: name_ASC){
          name
          programs {
            title
            route
          }
          body {
            html
          }
          media {
            handle
            height
            width
            photoCredit
          }
          route
        }
      }
    `
    }else if(this.props.searchType === 'tag'){
      return gql`
      query ArtistswithProgramswithTag($searchTerm : String){
        artists(where: {programs_some: {tags_some: {name: $searchTerm}}}){
          name
          programs(where: {tags_some: {name: $searchTerm}}) {
            title
            route
          }
          body {
            html
          }
          media {
            handle
            height
            width
            photoCredit
          }
          route
        }
      }
    `
    }else {
      return gql`
      query ArtistswithPrograms($searchTerm : String){
        artists(where: {name_contains: $searchTerm}){
          name
          programs {
            title
            route
          }
          body {
            html
          }
          media {
            handle
            height
            width
            photoCredit
          }
          route
        }
      }
    `
    }
  }

  resizeMedia(media) {
    if ((media.width > 800) || (media.height > 800)){
      if(media.width >= media.height){
        return ('resize=width:800/' + media.handle)
      } else {
        return ('resize=height:800/' + media.handle)
      }
    } else {
      return media.handle
    }
  }

  render(){
    if(this.props.searchTerm !== ''){
      return(
        <Query query={this.getSearchType()} variables={{"searchTerm" : this.props.searchTerm, "sTerm": ' ' + this.props.searchTerm}}>
          {({ loading, error, data }) => {
            if (loading) return (
              <div>
                <h1>Loading&hellip;</h1>
                <h4>This should only take a moment</h4>
                <p>If your results don't appear, please resubmit your query</p>
              </div>
            )
            if (error) return `Error! ${error.message}`
            let list = []
            if(this.props.searchType === 'letter'){
              list.push(
                <PicaArtistBlock section key={0}>
                <h3>{this.props.searchTerm.toUpperCase()}</h3></PicaArtistBlock>
              )
            }
            data.artists.forEach((artist, index) => {
              list.push(
                <PicaArtistBlock
                name={artist.name}
                events={artist.programs}
                description={artist.body.html}
                route={artist.route}
                image={artist.media[0] ? 'https://media.graphcms.com/' + this.resizeMedia(artist.media[0]) : ''}
                key={index + list.length}
                index={index}
                activeIndex={this.state.activeIndex}
                setOpen={this.setOpen}
                setClose={this.setClose}
                cardOpen={this.state.cardOpen} />
              )
            })
            if ((this.props.searchType === 'letter' &&list.length === 1) || (this.props.searchType !== 'letter' && list.length === 0)){
              list = (
                <div xs='6' xl='4'>
                  <h1>Sorry, we couldn't find any results</h1>
                </div>
              )
            }
            return (
              <div style={{width: '100%', height: '100%'}}>
                {list}
              </div>
            )
          }}
        </Query>
      )
    } else {
      return(
        <h1>Search away, friend...</h1>
      )
    }
  }
}

export default PicaArtistQuery