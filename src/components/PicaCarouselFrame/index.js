import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'


import PicaCarousel from '../PicaCarousel'

class PicaCarouselFrame extends Component {

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
          program {
            title
            dateAndTime
            testDateAndTime
            gallery {
              galleryItems {
                media {
                  photoCredit
                  handle
                  height
                  width
                }
              }
            }
            route
            shortDescription
          }
        }
      }
    `
    return (
      <Query query={GET_CONTENT}>
        {({ loading, error, data }) => {
          if (loading) return (
            <PicaCarousel loading/>
          )
          if (error) return (
            <PicaCarousel error/>
          )
          let heroSlides = data.heroSlides
          return (
            <PicaCarousel heroSlideData={heroSlides}/>
          )
        }}
      </Query>
    )
  }
}

export default PicaCarouselFrame