import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class PicaArtistQuery extends React.Component {
  render(){
    const GET_CONTENT = gql`
      query ArtistswithPrograms($artistName : String){
        artists(where: {name_contains: $artistName}){
          name
          programs {
            title
          }
        }
      }
      `
    if(this.props.searchTerm !== ''){
      return(
        <Query query={GET_CONTENT} variables={{"artistName" : this.props.searchTerm}}>
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

export default PicaArtistQuery