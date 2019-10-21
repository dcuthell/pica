import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class PicaEventQuery extends React.Component {
  render(){
    const SEARCH_CONTAIN = gql`
      query EventSearchByTitleandArtist($searchTerm : String){
        programs(where: { 
          OR: [{title_contains: $searchTerm}, {artists_some: {name_contains: $searchTerm}}]
        }){
          testDateAndTime
          title
          artists {
            name
          }
          dateAndTime
          shortDescription
          route
          gallery {
            galleryItems {
              media {
                handle
              }
            }
          }
        }
      }
    `
    const SEARCH_TAG = gql`
      query EventbyTagName($searchTerm : String){
        programs(where: {tags_some: {name: $searchTerm}}){
          testDateAndTime
          title
          artists {
            name
          }
          dateAndTime
          shortDescription
          route
          gallery {
            galleryItems {
              media {
                handle
              }
            }
          }
        }
      }
    `
    if(this.props.searchTerm !== ''){
      return(
        <Query query={(this.props.letter === 'tag') ? SEARCH_TAG : SEARCH_CONTAIN} variables={{"searchTerm" : this.props.searchTerm}}>
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
    } else {
      return(
        <h1>Search away, friend...</h1>
      )
    }
  }
}

export default PicaEventQuery