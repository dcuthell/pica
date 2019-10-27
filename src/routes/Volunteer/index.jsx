import React from 'react'
import { Container, Col, Row } from 'reactstrap'

export default function Volunteer (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto', backgroundColor: 'white'}}>
      <Row style={{margin: '0px'}}>
        <Col xl='12'>
          <h1 style={{fontSize: '8rem', textAlign: 'left'}}>VOLUNTEER</h1>
        </Col>
        <Col xl='12'>
          <img src='http://pica.org/wp-content/uploads/2013/02/support_volunteer_700.jpg' alt='members' style={{maxWidth: '90%', maxHeight: '100%'}} />
        </Col>
        <Col xl='12' style={{backgroundColor: '#F8F8F8'}}>
          <h1>PICA’s world-renowned TBA Festival—along with our many year-round programs, activities, and special events—could never happen without hundreds of volunteers and thousands of hours. Join our community and help make it all happen! From ushering to fundraising, construction to administration, exhibitions to special events, we've got tasks for every interest and skill set. Sign up for volunteer announcements today and join us for the next big thing!</h1>
        </Col>
        <Col xl='12' style={{backgroundColor: '#ECDDBB'}}>
          <iframe width='510' height='500' frameborder='0' src='https://app.e2ma.net/app2/audience/signup/1420688/33182/?v=a'></iframe>
        </Col>
      </Row>
    </Container>
  )
}
