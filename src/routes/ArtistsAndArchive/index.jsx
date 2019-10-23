import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import PicaArtistArchive from '../../components/PicaArtistArchive'


export default function ArtistsAndArchive (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto'}}>
      <Row style={{height: '100%'}}>
        <Col xl='12' style={{height: '100vh'}}>
          <PicaArtistArchive />
        </Col>
      </Row>
    </Container>
  )
}
