import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { PicaCarousel } from 'grailsoft-modules'
import leftArrow from '../../img/LeftArrow.png'
import rightArrow from '../../img/RightArrow.png'
import collage from '../../img/collage.png'
import ben from '../../img/ben-01.png'

export default function Home (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto'}}>
      <Row style={{margin: '0px'}}>
        <Col xl='12' style={{height: '100vh', padding: '0px'}}>
          <div style={{height: '100%', backgroundColor: '#F8F8F8'}}>
            <PicaCarousel leftArrow={leftArrow} rightArrow={rightArrow} />
          </div>
        </Col>
        <Col xl='12' style={{height: '100vh', padding: '0px', backgroundColor: 'white'}}>
          <h1>Visit</h1>
          <h4>We're open to the public Wednesday through Friday, 12-6pm</h4>
          <img src={collage} style={{width: '80%'}} alt='collage' />
          <h4>We've moved! Stop by and check</h4>
          <h4>out our new permanent location</h4>
        </Col>
        <Col xl='12' style={{height: '70vh', padding: '0px', backgroundColor: '#ECDDBB'}}>
          <img src={ben} alt='ben' />
          <h3>Like what you see? Help us grow our archive of</h3>
          <h3>contemporary art by becoming a donor!</h3>
          <div style={{border: '1px solid black', width: '50%', margin: 'auto'}}>
            <h4>Donate</h4>
          </div>
        </Col>
        <Col xl='12' style={{height: '100vh', padding: '0px', backgroundColor: '#FFFBF3'}}>
          <h1>Mission</h1>
          <i className='fas fa-user' />
        </Col>
      </Row>
    </Container>
  )
}
