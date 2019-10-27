import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaPostBlock from '../PicaPostBlock'

class PicaBlogQuery extends React.Component {
  constructor(props){
    super(props)
    this.getSearchType = this.getSearchType.bind(this)
  }

  getSearchType(){
    if(this.props.searchType === ''){
      return gql`
        query PostsWithSearch($searchTerm: String){
          posts(where: {title_contains: $searchTerm}){
            title
            author
            date
            body {
              html
            }
            tags{
              name
            }
            image{
              handle
              height
              width
            }
            route
          }
        }
      `
    }
    if(this.props.searchType === 'tag'){
      return gql`
        query PostsWithTags($searchTerm: String){
          posts(where: {tags_some: {name: $searchTerm}}){
            title
            author
            date
            body {
              html
            }
            tags{
              name
            }
            image{
              handle
              height
              width
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
          let list = data.posts.map((post, index) =>
            <PicaPostBlock
              title={post.title}
              author={post.author}
              date={post.date}
              content={post.body.html}
              tags={post.tags}
              image={'https://media.graphcms.com/' + this.resizeMedia(post.image)}
              route={post.route}
              key={index}
            />
          )
          if (list.length === 0){
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
  }
}

export default PicaBlogQuery