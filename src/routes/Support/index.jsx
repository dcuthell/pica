import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaButton from '../../components/PicaButton'
import PicaSponsorBlockFrame from '../../components/PicaSponsorBlockFrame'

import members from '../../img/memberspic.png'
import ben from '../../img/ben-01.png'
import volunteer from '../../img/volunteerpic.png'
import calligram from '../../img/supporters/calligram.png'
import duke from '../../img/supporters/doris_duke.png'
import holst from '../../img/supporters/holst.png'
import hutchins from '../../img/supporters/hutchins_montague.png'
import kinsman from '../../img/supporters/kinsman.png'
import durst from '../../img/supporters/lesliedurst.png'
import meigs from '../../img/supporters/meigs.png'
import mellon from '../../img/supporters/mellon.png'
import meyer from '../../img/supporters/meyer_trust.png'
import miller from '../../img/supporters/miller.png'
import nea from '../../img/supporters/NEA.png'
import nefa from '../../img/supporters/NEFA.png'
import npn from '../../img/supporters/NPN.png'
import oac from '../../img/supporters/OAC.png'
import oct from '../../img/supporters/oregon_cultural_trust.png'
import ocf from '../../img/supporters/OregonCommunityFoundation.png'
import racc from '../../img/supporters/RACC.png'
import stephouse from '../../img/supporters/stephouse.png'
import warhol from '../../img/supporters/warhol.png'
import wieden from '../../img/supporters/wieden.png'
import workforart from '../../img/supporters/WorkForArt.png'

export default function Support (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto', backgroundColor: 'white'}}>
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
            <a href='http://www.pica.org/support/members'><p style={{margin: '4px 0px 4px 0px'}}>BECOME A MEMBER</p></a>
          </PicaButton>
        </Col>
        <Col xl='4' style={{backgroundColor: '#ECDDBB'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Donate</h2>
          <img src={ben} alt='ben' style={{maxWidth: '100%', maxHeight: '200px'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            PICA is Portland’s leading presenter of contemporary art. Our artistic events, educational activities, and community engagement initiatives would not be possible without the ongoing support and participation of artists, audiences, and art patrons like you.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <a href='http://www.pica.org/support/donations'><p style={{margin: '4px 0px 4px 0px'}}>DONATE TODAY</p></a>
          </PicaButton>
        </Col>
        <Col xl='4' style={{backgroundColor: '#E4E4E4'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Volunteer</h2>
          <img src={volunteer} alt='ben' style={{maxWidth: '100%', maxHeight: '100%'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            Our year-round programs, activities, and special events wouldn’t be possible without volunteers. Help make it all happen by becoming a volunteer! From ushering to fundraising, we’ve got tasks for every interest and skill set.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <a href='http://www.pica.org/support/volunteer/'><p style={{margin: '4px 0px 4px 0px'}}>BECOME A VOLUNTEER</p></a>
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
