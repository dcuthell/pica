import React from 'react'
import { Container, Col, Row } from 'reactstrap'

export default function Tickets (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%'}}>
      <Row>
        <Col xl='12' style={{height: '10vh'}}>
          <h1>Tickets</h1>
        </Col>
        <Col xl='12'>
          <div style={{height: '90vh', overflowY: 'scroll'}}>
            <iframe src={'https://system.spektrix.com/pica/website/EventDetails.aspx?WebEventId=' + props.match.params.webeventid} title='SpektrixIFrame' name='SpektrixIFrame' id='SpektrixIFrame' style={{frameBorder: '0', height: '100%', width: '80%', border: 'none'}} onLoad={setTimeout(function() { window.scrollTo(0, 0) }, 100)} />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
