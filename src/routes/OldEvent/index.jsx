import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaEvent from '../../components/PicaEvent'

export default function Event (props) {
  console.log(props)
  const GET_CONTENT = gql`
    query FindEventByRoute($route : String){
      events (where: {route: $route}){
        title
        route
        content
        publishDate
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
              console.log(data.events)
              if (data.events.length === 0){
                return(
                  <h1>Sorry, no results</h1>
                )
              } else{
                return (
                  <div>
                    <PicaEvent
                      eventName={data.events[0].title}
                      eventDate={data.events[0].publishDate}
                      artists={[]}
                      detailsShort={"None"}
                      detailsLong={data.events[0].content}
                      venue={[]}
                      price={[]}
                      runTime={[]}
                      webEventId={[]}
                      tags={[]}
                      galleryItems={[{media: {handle: 'AKuZYOQsSkugUiFbLM0v'}}]}
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