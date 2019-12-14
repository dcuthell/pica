import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaArtist from '../../components/PicaArtist'

export default function Artist (props) {
  console.log(props)
  const GET_CONTENT = gql`
    query FindArtistByRoute($route : String){
      artists(where: {route: $route}){
        name
        content
        route
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
              if (data.artists.length === 0){
                return(
                  <h1>Sorry, no results</h1>
                )
              } else{
                return (
                  <div>
                    <PicaArtist
                      name={data.artists[0].name}
                      events={[]}
                      description={data.artists[0].content}
                      media={[]}
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