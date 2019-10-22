import React from 'react'
import { Container, Col, Row, Jumbotron } from 'reactstrap'
import PicaArtistBlockFrame from '../../components/PicaArtistBlockFrame'
import PicaEventList from '../../components/PicaEventList'

export default function Events (props) {
  return (
    <Container className='Events' style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto'}}>
      <Row style={{height: '100%'}}>
        <Col xl='12' style={{height: '100vh'}}>
          <PicaEventList />
        </Col>
      </Row>
    </Container>
  )
}
