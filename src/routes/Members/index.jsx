import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaButton from '../../components/PicaButton'
import members from '../../img/memberspic.png'
import ben from '../../img/ben-01.png'
import volunteer from '../../img/volunteerpic.png'

export default function Members (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto', backgroundColor: 'white'}}>
      <Row style={{margin: '0px'}}>
        <Col xl='12'>
          <h1 style={{fontSize: '8rem', textAlign: 'left'}}>MEMBERS</h1>
        </Col>
        <Col xl='12'>
          <img src={members} alt='members' style={{maxWidth: '90%', maxHeight: '100%'}} />
        </Col>
        <Col xl='12'>
          <h3 style={{textAlign: 'left'}}>
            Spend less and do more! As a PICA member, you’ll enjoy access to exclusive invite-only events and receive generous discounts on TBA passes and tickets, PICA year-round programs, and PICA merchandise. Best of all, as a 501(c)(3) nonprofit, your membership is a charitable gift to PICA, helping us to underwrite each and every one our programs, from artist residencies and commissions, to exhibitions and performances, to education, outreach, and community engagement programs.
          </h3>
        </Col>
        <Col xl='12' style={{backgroundColor: '#F8F8F8'}}>
          <h3 style={{textAlign: 'left', padding: '30px 0px 30px 5%'}}>RATES & BENEFITS</h3>
        </Col>
        <Col xl='12' style={{backgroundColor: '#F8F8F8', minHeight: '400px'}}>
          <div style={{paddingBottom: '60px', fontSize: '.8rem', lineHeight: '.75rem', textAlign: 'left', width: '33%', position: 'absolute', left: '0'}}>
            <h4 style={{fontSize: '.9rem'}}>MEMBERSHIP/ $50 <br />($35 for ARTISTS and STUDENTS)</h4>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>20% discount on TBA Festival passes, year-round performances, events, merchandise, and publications</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>Advance sales on programs and events</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>Invitation to members-only events and previews</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>Subscription to email newsletters for the latest PICA updates</p>
            <h4 style={{fontSize: '.9rem', paddingTop: '1rem'}}>CONTRIBUTOR ⁄ $100</h4>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>(2) PICA Memberships and all of the benefits included </p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>Acknowledgment posted in printed materials  </p>
          </div>
          <div style={{paddingBottom: '60px', fontSize: '.8rem', lineHeight: '.75rem', textAlign: 'left', width: '33%', position: 'absolute', left: '33.3%'}}>
            <h4 style={{fontSize: '.9rem'}}>ENTHUSIAST ⁄ $250</h4>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>CONTRIBUTOR benefits +</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>Invitations to exclusive visiting and resident artist receptions and events </p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>Acknowledgment posted on donor walls</p>
            <h4 style={{fontSize: '.9rem', paddingTop: '1rem'}}>ADVOCATE ⁄ $500</h4>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>ENTHUSIAST benefits +</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>Invitations to private sponsor receptions</p>
            <h4 style={{fontSize: '.9rem', paddingTop: '1rem'}}>SUPPORTER ⁄ $1,000</h4>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>ADVOCATE benefits +</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>Invitations to sponsor receptions and private exhibition tours with curatorial staff</p>
          </div>
          <div style={{paddingBottom: '60px', fontSize: '.8rem', lineHeight: '.75rem', textAlign: 'left', width: '33%', position: 'absolute', right: '0'}}>
            <h4 style={{fontSize: '.9rem'}}>PATRON ⁄ $2,500</h4>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>SUPPORTER benefits +</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>(1) TBA Immersion Pass</p>
            <h4 style={{fontSize: '.9rem', paddingTop: '1rem'}}>CHAMPION ⁄ $5,000</h4>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>PATRON benefits +</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>(2) Additional PICA Memberships and all of the benefits included (4 Total)</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>(1) Additional TBA Immersion Pass (2 Total)</p>
            <h4 style={{fontSize: '.9rem', paddingTop: '1rem'}}>UNDERWRITER ⁄ $10,000</h4>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>CHAMPION benefits +</p>
            <p style={{margin: '0px', paddingTop: '.25rem'}}>Access to exclusive concierge service during TBA Festival</p>
          </div>
        </Col>
        <Col xl='12' style={{backgroundColor: '#F8F8F8'}}>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <a href='https://www.pica.org/memberships'><p style={{margin: '4px 0px 4px 0px'}}>BECOME A MEMBER</p></a>
          </PicaButton>
        </Col>
        <Col xl='6' style={{backgroundColor: '#ECDDBB'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Donate</h2>
          <img src={ben} alt='ben' style={{maxWidth: '100%', maxHeight: '100%'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            PICA is Portland’s leading presenter of contemporary art. Our artistic events, educational activities, and community engagement initiatives would not be possible without the ongoing support and participation of artists, audiences, and art patrons like you.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <a href='https://www.pica.org/donations'><p style={{margin: '4px 0px 4px 0px'}}>DONATE TODAY</p></a>
          </PicaButton>
        </Col>
        <Col xl='6' style={{backgroundColor: '#E4E4E4'}}>
          <h2 style={{textAlign: 'left', paddingLeft: '5%'}}>Volunteer</h2>
          <img src={volunteer} alt='ben' style={{maxWidth: '100%', maxHeight: '100%'}} />
          <p style={{marginBottom: '60px', textAlign: 'left', paddingLeft: '5%'}}>
            Our year-round programs, activities, and special events wouldn’t be possible without volunteers. Help make it all happen by becoming a volunteer! From ushering to fundraising, we’ve got tasks for every interest and skill set.
          </p>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '10%'}}>
            <a href='https://www.pica.org/support/volunteer/'><p style={{margin: '4px 0px 4px 0px'}}>BECOME A VOLUNTEER</p></a>
          </PicaButton>
        </Col>
        <Col xl='12' style={{height: '100%'}}>
          <div style={{height: '100%', backgroundColor: 'white'}}>
            <p>For more information about in-kind donations, matching gifts, or legacy and planned giving, please contact our Development department at development@pica.org or 503.242.1419 x22.
            </p>
            <p>Your contribution(s) may be tax-deductible. The tax deduction is limited to the excess of your contribution over the value of items or services you received. For your tax purposes, PICA’s tax ID number is #93-1177971.</p>
            <p>Double your impact! PICA donors are now eligible to participate in the Oregon’s Cultural Tax Credit. Donors who contribute to Oregon cultural nonprofits are eligible to make a matching donation to the Oregon Cultural Trust and receive a 100% tax credit for their Trust donation (up to $500 for an individual, $1,000 for a couple filing jointly and $2,500 for a Class-C Corporation).</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
