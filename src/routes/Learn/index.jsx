import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import fancy from '../../img/collage.png'

export default function Learn (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%'}}>
      <Row style={{height: '100%'}}>
        <Col xl='12' style={{height: '100%'}}>
          <div style={{height: '100%', backgroundImage: 'url(' + fancy + ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
            <h1>Learn</h1>
          </div>
        </Col>
        <Col>
          <h1>Learn</h1>
        </Col>
      </Row>
    </Container>
  )
}
