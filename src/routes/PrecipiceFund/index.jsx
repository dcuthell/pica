import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaPrecipiceList from '../../components/PicaPrecipiceList'

export default function PrecipiceFund (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto'}}>
      <Row>
      <Col xl='12' style={{height: '50vh'}}>
          <h1 style={{fontSize: '8rem', textAlign: 'left'}}>PRECIPICE</h1>
          <h1 style={{fontSize: '8rem', textAlign: 'left'}}>FUND</h1>
        </Col>
        <Col xl='12' style={{height: '50vh'}}> 
          <h2 style={{textAlign: 'left'}}>
            The Precipice Fund provides critical support for artist-driven organizations, projects, initiatives, and publications that exist on the edge of new practice. These projects operate outside of traditional forms of support, galvanize communities, promote critical dialogue, and encourage generative and expansive artistic process while driving culture forward regionally and nationally. These often informal, anti-institutional, serious, intentionally nebulous, and innovative projects are an integral part of the greater Portland region’s vital art ecology and are emulative of the pioneering spirit of the Pacific Northwest.
          </h2>
        </Col>
        <Col xl='12'>
          <PicaPrecipiceList />
        </Col>
      </Row>
    </Container>
  )
}
