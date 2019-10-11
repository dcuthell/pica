import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class PicaArtistQuery extends React.Component {
  constructor(props){
    super(props)

    this.getSearchType = this.getSearchType.bind(this)
  }
  getSearchType(){
    if (this.props.searchType === 'letter'){
      return gql`
      query ArtistswithPrograms($artistName : String){
        artists(where: {name_starts_with: $artistName}){
          name
          programs {
            title
          }
        }
      }
    `
    }else if(this.props.searchType === 'tag'){
      return gql`
      query ArtistswithProgramswithTag($tagName : String){
        artists{
          name
          programs {
            title
            tags(where: {name: $tagName}){
              name
            }
          }
        }
      }
    `
    }else {
      return gql`
      query ArtistswithPrograms($artistName : String){
        artists(where: {name_contains: $artistName}){
          name
          programs {
            title
          }
        }
      }
    `
    }
  }

  render(){
    if(this.props.searchTerm !== ''){
      if(this.props.searchType === 'tag'){
        return(
          <Query query={this.getSearchType()} variables={{"tagName" : this.props.searchTerm}}>
          {({ loading, error, data }) => {
            if (loading) return (
              <h1>Loading&hellip;</h1>
            )
            if (error) return `Error! ${error.message}`
            let artists = []
            data.artists.forEach((artist, index) => {
              let performances = []
              artist.programs.forEach((program, index) => {
                if(program.tags){
                  performances.push(
                    <h3 key={index}>{program.title}</h3>
                  )
                }
              })
              if(performances){
                artists.push(
                  <div key={index}>
                    <h1>{artist.name}</h1>
                    {performances}
                  </div>
                )
              }
            })
            if (artists.length === 0){
              artists = (
                <div xs='6' xl='4'>
                  <h1>Sorry, we couldn't find any results</h1>
                </div>
              )
            }
            return (
              <div>
                {artists}
              </div>
            )
          }}
        </Query>
        )
      } else{
        return(
          <Query query={this.getSearchType()} variables={{"artistName" : this.props.searchTerm}}>
            {({ loading, error, data }) => {
              if (loading) return (
                <h1>Loading&hellip;</h1>
              )
              if (error) return `Error! ${error.message}`
              let artists = data.artists
              let list = artists.map((artist, index) => {
                let programs = artist.programs.map((program) =>
                  <h3 key={index}>{program.title}</h3>
                )
                return(
                  <div key={index}>
                    <h1>{artist.name}</h1>
                    {programs}
                  </div>
                )
              }
                
              )
              if (list.length === 0){
                list = (
                  <div xs='6' xl='4'>
                    <h1>Sorry, we couldn't find any results</h1>
                  </div>
                )
              }
              return (
                <div>
                  {list}
                </div>
              )
            }}
          </Query>
        )
      }
      
    } else {
      return(
        <h1>Search away, friend...</h1>
      )
    }
  }
}

export default PicaArtistQuery