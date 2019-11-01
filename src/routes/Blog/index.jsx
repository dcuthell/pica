import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaBlogList from '../../components/PicaBlogList'

export default function Blog (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%'}}>
      <Row>
        <Col xl='12' style={{height: '100vh'}}>
          <PicaBlogList />
        </Col>
      </Row>
    </Container>
  )
}
