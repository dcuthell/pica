import React from 'react'
import { Container, Col, Row } from 'reactstrap'

function importSpektrix() {
  const tag = document.createElement('script')
  const link = document.createElement('link')

  tag.async = false
  tag.src = 'https://system.spektrix.com/pica/api/v3/webcomponents/js'

  link.rel = 'import'
  link.href = 'https://system.spektrix.com/pica/api/v3/webcomponents/html'
  link.crossOrigin = 'use-credentials'

  document.body.appendChild(tag)
  document.body.appendChild(link)

}

export default function Blog (props) {
  importSpektrix()
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%'}}>
      <Row>
        <Col xl='12' style={{height: '10vh'}}>
          <h1>Blog</h1>
        </Col>
        <Col xl='12'>
          <h1>STUFF</h1>
          <spektrix-logged-in-status show-first-name='true'></spektrix-logged-in-status>
        </Col>
      </Row>
    </Container>
  )
}
