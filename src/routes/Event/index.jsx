import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaCarousel from '../../components/PicaCarousel'
import PicaCarouselCard from '../../components/PicaCarouselCard'
import PicaButton from '../../components/PicaButton'
import collage from '../../img/collage.png'
import ben from '../../img/ben-01.png'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default function Event (props) {
  console.log(props.match.params.id)
  const GET_CONTENT = gql`
    query FindArtistByName($artistName : String! = "bob"){
      artists (where: {name_contains: $artistName}){
        name
        sortByName
      }
    }
  `
  return (
    <Container>
      <Row>
        <Col>
          <Query query={GET_CONTENT} variables={{"artistName" : props.match.params.id}}>
            {({ loading, error, data }) => {
              if (loading) return (
                <h1>Loading...</h1>
              )
              if (error) return `Error! ${error.message}`
              return (
                <h1>{data.artists[0].name}</h1>
              )
            }}
          </Query>
        </Col>
      </Row>
    </Container>
  )
}
