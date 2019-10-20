import React from 'react'
import { Container, Col, Row, Jumbotron } from 'reactstrap'
import PicaArtistBlockFrame from '../../components/PicaArtistBlockFrame'

export default function Events (props) {
  return (
    <Container className='Events' style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto'}}>
      <Row style={{height: '100%'}}>
        <Col xl='12' style={{height: '20vh', zIndex: '100'}}>
          <Jumbotron style={{height: '100%'}}>
            <h1>EVENTS</h1>
          </Jumbotron>
        </Col>
        <Col xl='12' style={{height: '90vh'}}>
          <PicaArtistBlockFrame />
        </Col>
      </Row>
    </Container>
  )
}
