import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import PicaButton from '../../components/PicaButton'
import ben from '../../img/ben-01.png'
import members from '../../img/memberspic.png'

import volunteerpic from '../../img/support_volunteer_700.jpg'

export default function Volunteer (props) {
  return (
    <Container id='Volunteer' style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto', backgroundColor: 'white'}}>
      <Row style={{margin: '0px'}}>
        <Col xl='12'>
          <h1 style={{fontSize: '8rem', textAlign: 'left'}}>VOLUNTEER</h1>
        </Col>
        <Col xl='12'>
          <img src={volunteerpic} alt='members' style={{maxWidth: '90%', maxHeight: '100%'}} />
        </Col>
        <Col xl='12' style={{backgroundColor: '#F8F8F8'}}>
          <h1>PICA’s world-renowned TBA Festival—along with our many year-round programs, activities, and special events—could never happen without hundreds of volunteers and thousands of hours. Join our community and help make it all happen! From ushering to fundraising, construction to administration, exhibitions to special events, we've got tasks for every interest and skill set. Sign up for volunteer announcements today and join us for the next big thing!</h1>
        </Col>
        <Col xl='6' style={{backgroundColor: '#ECDDBB'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Donate</h2>
          <img src={ben} alt='ben' style={{maxWidth: '100%', maxHeight: '100%'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            PICA is Portland’s leading presenter of contemporary art. Our artistic events, educational activities, and community engagement initiatives would not be possible without the ongoing support and participation of artists, audiences, and art patrons like you.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <Link to='/support/donations'><p style={{margin: '4px 0px 4px 0px'}}>DONATE TODAY</p></Link>
          </PicaButton>
        </Col>
        <Col xl='6' style={{backgroundColor: '#E4E4E4'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Members</h2>
          <img src={members} alt='member' style={{maxWidth: '100%', maxHeight: '100%'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
           As a PICA member, you’ll spend less and do more! Enjoy access to exclusive events and receive generous discounts on TBA passes and tickets, programs, and merchandise.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <Link to='/support/members'><p style={{margin: '4px 0px 4px 0px'}}>BECOME A MEMBER</p></Link>
          </PicaButton>
        </Col>
        <Col xl='12' style={{backgroundColor: '#F8F8F8'}}>
          <iframe title='volunteer-form' width='510' height='500' frameborder='0' src='https://app.e2ma.net/app2/audience/signup/1420688/33182/?v=a'></iframe>
        </Col>
      </Row>
    </Container>
  )
}
