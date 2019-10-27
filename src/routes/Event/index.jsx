import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaEvent from '../../components/PicaEvent'

export default function Event (props) {
  console.log(props)
  const GET_CONTENT = gql`
    query FindProgramByRoute($route : String){
      programs (where: {route: $route}){
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
          route
        }
        venues {
          name
          address
          capacity
        }
        tags {
          name
        }
      }
    }
  `
  return (
    <Container style={{padding: '0px', margin: '0px'}}>
      <Row style={{padding: '0px', margin: '0px'}}> 
        <Col style={{padding: '0px', margin: '0px'}}>
          <Query query={GET_CONTENT} variables={{"route" : props.match.params.id}}>
            {({ loading, error, data }) => {
              if (loading) return (
                <h1>Loading...</h1>
              )
              if (error) return `Error! ${error.message}`
              console.log(data.programs)
              if (data.programs.length === 0){
                return(
                  <h1>Sorry, no results</h1>
                )
              } else{
                return (
                  <div>
                    <PicaEvent
                      eventName={data.programs[0].title}
                      eventDate={data.programs[0].dateAndTime}
                      artists={data.programs[0].artists}
                      detailsShort={data.programs[0].shortDescription}
                      detailsLong={data.programs[0].longDescription.html}
                      venue={data.programs[0].venues[0]}
                      price={data.programs[0].price}
                      runTime={data.programs[0].runTime}
                      webEventId={data.programs[0].webEventId}
                      tags={data.programs[0].tags}
                      galleryItems={data.programs[0].gallery ? data.programs[0].gallery.galleryItems : [{media: {handle: 'AKuZYOQsSkugUiFbLM0v'}}]}
                    />
                  </div>
                )
              }
            }}
          </Query>
        </Col>
      </Row>
    </Container>
  )
}