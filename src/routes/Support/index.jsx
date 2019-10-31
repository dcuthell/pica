import React, { useEffect } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import PicaButton from '../../components/PicaButton'
import PicaSponsorBlockFrame from '../../components/PicaSponsorBlockFrame'

import members from '../../img/memberspic.png'
import ben from '../../img/ben-01.png'
import volunteer from '../../img/volunteerpic.png'

export default function Support (props) {
  useEffect(() => {
    document.getElementById('Support').scrollIntoView()
  })

  return (
    <Container id='Support' style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto', backgroundColor: 'white'}}>
      <Row style={{margin: '0px'}}>
        <Col xl='12'>
          <h1 style={{fontSize: '8rem', textAlign: 'left'}}>SUPPORT</h1>
        </Col>
        <Col xl='12'>
          <h2 style={{textAlign: 'left'}}>
            PICA believes everyone should have access to contemporary art. We strive to keep ticket prices low and provide free admission to the majority of our programs. Your investment and involvement allow PICA to present bold, new work by artists representing a broad range of identities and perspectives which might not otherwise be seen in Portland, and to connect audiences to boundary-pushing ideas, experiences, and expressions through direct access to artists.
          </h2>
        </Col>
        <Col xl='4' style={{backgroundColor: '#F8F8F8'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Members</h2>
          <img src={members} alt='ben' style={{maxWidth: '332px', maxHeight: '100%'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            As a PICA member, you’ll spend less and do more! Enjoy access to exclusive events and receive generous discounts on TBA passes and tickets, programs, and merchandise.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <Link to='/support/members'><p style={{margin: '4px 0px 4px 0px'}}>BECOME A MEMBER</p></Link>
          </PicaButton>
        </Col>
        <Col xl='4' style={{backgroundColor: '#ECDDBB'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Donate</h2>
          <img src={ben} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            PICA is Portland’s leading presenter of contemporary art. Our artistic events, educational activities, and community engagement initiatives would not be possible without the ongoing support and participation of artists, audiences, and art patrons like you.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <Link to='/support/donations'><p style={{margin: '4px 0px 4px 0px'}}>DONATE TODAY</p></Link>
          </PicaButton>
        </Col>
        <Col xl='4' style={{backgroundColor: '#E4E4E4'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Volunteer</h2>
          <img src={volunteer} alt='ben' style={{maxWidth: '100%', maxHeight: '100%'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            Our year-round programs, activities, and special events wouldn’t be possible without volunteers. Help make it all happen by becoming a volunteer! From ushering to fundraising, we’ve got tasks for every interest and skill set.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <Link to='/support/volunteer'><p style={{margin: '4px 0px 4px 0px'}}>BECOME A VOLUNTEER</p></Link>
          </PicaButton>
        </Col>
        <Col xl='12' style={{padding: '40px 10% 40px 10%'}}>
          <h1>Our Supporters</h1>
          <p>
            PICA warmly thanks our generous sponsors, donors, and members for their commitment to contemporary art. For information on the ways you can become a sponsor, please visit our sponsorship page. To become a PICA member, please visit our membership page to join online today.
          </p>
        </Col>
        <PicaSponsorBlockFrame />
        <Col xl='12' style={{height: '100%'}}>
          <div style={{height: '100%', backgroundColor: 'white'}}>
            <h1>Support</h1>
            <p>PICA believes everyone should have access to contemporary art. We strive to keep ticket prices low and provide free admission to the majority of our programs. Your investment and involvement allow PICA to present bold, new work by artists representing a broad range of identities and perspectives which might not otherwise be seen in Portland, and to connect audiences to boundary-pushing ideas, experiences, and expressions through direct access to artists.</p>
            <p>Double your impact! PICA donors are now eligible to participate in the Oregon’s Cultural Tax Credit. Donors who contribute to Oregon cultural nonprofits are eligible to make a matching donation to the <a href='https://culturaltrust.org/get-involved/donate'>Oregon Cultural Trust</a> and receive a 100% tax credit for their Trust donation (up to $500 for an individual, $1,000 for a couple filing jointly and $2,500 for a Class-C Corporation).</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
