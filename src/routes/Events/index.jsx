import React from 'react'
import { Container, Col, Row, Jumbotron } from 'reactstrap'
import PicaEventDeck from '../../components/PicaEventDeck'
import PicaEventCard from '../../components/PicaEventCard'

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
          <PicaEventDeck>
            <PicaEventCard
              title='Title'
              date='stuff'
              index={0}
              background='#B0C170'
            />
            <PicaEventCard
              title='Title'
              date='things'
              index={1}
              background='#FFC2EB'
            />
            <PicaEventCard
              title='Title'
              date='play'
              index={2}
              background='#0DAE5D'
            />
            <PicaEventCard
              title='Title'
              date='stuff'
              index={3}
              background='#8EA9D5'
            />
            <PicaEventCard
              title='Title'
              date='things'
              index={4}
              background='#D8BFD8'
            />
            <PicaEventCard
              title='Title'
              date='play'
              index={5}
              background='#FF5928'
            />
            <PicaEventCard
              title='Title'
              date='stuff'
              index={6}
              background='black'
            />
          </PicaEventDeck>
        </Col>
      </Row>
    </Container>
  )
}
