import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


import PicaEventReel from '../PicaEventReel'

class PicaEventReelFrame extends Component {

  render() {
    const GET_CONTENT = gql`
      query Posts{
        posts(orderBy: date_ASC){
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
    return (
      <Query query={GET_CONTENT}>
        {({ loading, error, data }) => {
          if (loading) return (
            <PicaEventReel loading/>
          )
          if (error) return (
            <PicaEventReel error/>
          )
          return (
            <PicaEventReel postData={data.posts}/>
          )
        }}
      </Query>
    )
  }
}

export default PicaEventReelFrame