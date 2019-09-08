import React from 'react'
import { Container, Col, Row } from 'reactstrap'

function importSpektrix() {
  const tag = document.createElement('script')
  const link = docum
  tag.async = false
  tag.src = 'https://system.spektrix.com/pica/api/v3/webcomponents/js'


}

export default function Blog (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%'}}>
      <Row>
        <Col xl='12' style={{height: '10vh'}}>
          <h1>Blog</h1>
        </Col>
        <Col xl='12'>
          <h1>STUFF</h1>
        </Col>
        <spektrix-basket-item-count></spektrix-basket-item-count>
      </Row>
    </Container>
  )
}
