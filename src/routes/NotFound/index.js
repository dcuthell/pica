import React from 'react'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import './styles.css'

export default function NotFound() {
  return (
    <Container>
      <Row className='d-flex flex-column align-items-center justify-content-center' style={{height: '80vh'}} id='Home'>
        <Col className='d-flex flex-column align-items-center justify-content-center' md='8' style={{textAlign: 'center'}}>
          <Jumbotron>
            <h1>404</h1>
            <h2>Sorry, but it appears the cat has been playing with the cords again.</h2>
            <h2><a href='/'>Return to Home Page</a></h2>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  )
}
