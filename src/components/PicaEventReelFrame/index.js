import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


import PicaEventReel from '../PicaEventReel'

class PicaEventReelFrame extends Component {

  render() {
    const GET_CONTENT = gql`
      query {
        heroSlides (orderBy: sortNumber_ASC){
          title
          date
          image {
            handle
            photoCredit
          }
          buttonText
          buttonLink
          description
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
          let heroSlides = data.heroSlides
          return (
            <PicaEventReel heroSlideData={heroSlides}/>
          )
        }}
      </Query>
    )
  }
}

export default PicaEventReelFrame