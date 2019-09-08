import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import TBAProgram from '../../components/TBAProgram'

export default function TBAEvent (props) {
  const GET_CONTENT = gql`
    query FindProgramByRoute($route : String){
      programs (where: {route: $route}){
        sortNumber
        title
        dateAndTime
        webEventId
        testDateAndTime
        price
        runTime
        shortDescription
        longDescription {
          html
        }
        youTubeVideoId
        vimeoVideoId
        gallery {
          galleryItems (orderBy: sortNumber_ASC){
            sortNumber
            media {
              handle
              height
              width
              photoCredit
            }
          }
        }
        artists {
          name
        }
        venues {
          name
          address
          capacity
        }
      }
    }
  `
  return (
    <Container>
      <Row>
        <Col>
          <Query query={GET_CONTENT} variables={{"route" : props.match.params.id}}>
            {({ loading, error, data }) => {
              if (loading) return (
                <h1>Loading...</h1>
              )
              if (error) return `Error! ${error.message}`
              return (
                <div>
                  <TBAProgram
                    eventName={data.programs[0].title}
                    eventDate={data.programs[0].dateAndTime}
                    artists={data.programs[0].artists}
                    detailsShort={data.programs[0].shortDescription}
                    detailsLong={data.programs[0].longDescription.html}
                    venue={data.programs[0].venues[0]}
                    price={data.programs[0].price}
                    runTime={data.programs[0].runTime}
                    webEventId={data.programs[0].webEventId}
                    YouTubeId={data.programs[0].youTubeVideoId}
                    VimeoId={data.programs[0].vimeoVideoId}
                    galleryItems={data.programs[0].gallery ? data.programs[0].gallery.galleryItems : [{media: {handle: 'AKuZYOQsSkugUiFbLM0v'}}]}
                  />
                </div>
              )
            }}
          </Query>
        </Col>
      </Row>
    </Container>
  )
}
