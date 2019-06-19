import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import TBAArtistBlock from '../../components/TBAArtistBlock'

export default function ArtistsAndArchive (props) {
  return (
    <Container className='ArtistsAndArchive' style={{padding: '0', margin: '0px', maxWidth: '100%', height: '100vh'}}>
      <Row style={{margin: '0'}}>
        <Col xl='6' style={{paddingTop: '15px', paddingBottom: '15px'}}>
          <TBAArtistBlock />
        </Col>
        <Col xl='6' style={{paddingTop: '15px', paddingBottom: '15px'}}>
          <TBAArtistBlock />
        </Col>
        <Col xl='6' style={{paddingTop: '15px', paddingBottom: '15px'}}>
          <TBAArtistBlock />
        </Col>
        <Col xl='6' style={{paddingTop: '15px', paddingBottom: '15px'}}>
          <TBAArtistBlock />
        </Col>
      </Row>
    </Container>
  )
}
