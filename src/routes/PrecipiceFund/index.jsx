import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaPrecipiceList from '../../components/PicaPrecipiceList'
import precipice from '../../img/Precipice-MarkCentered-3x.png'

export default function PrecipiceFund (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto'}}>
      <Row>
      <Col xl='12' style={{height: '50vh', backgroundColor: 'white'}}>
          <h1 style={{fontSize: '8rem', textAlign: 'left'}}>PRECIPICE</h1>
          <h1 style={{fontSize: '8rem', textAlign: 'left'}}>FUND</h1>
        </Col>
        <Col xl='12' style={{minHeight: '50vh', backgroundColor: 'white'}}> 
          <h2 style={{textAlign: 'left'}}>
            The Precipice Fund provides critical support for artist-driven organizations, projects, initiatives, and publications that exist on the edge of new practice. These projects operate outside of traditional forms of support, galvanize communities, promote critical dialogue, and encourage generative and expansive artistic process while driving culture forward regionally and nationally. These often informal, anti-institutional, serious, intentionally nebulous, and innovative projects are an integral part of the greater Portland region’s vital art ecology and are emulative of the pioneering spirit of the Pacific Northwest.
          </h2>
        </Col>
        <Col xl='12' style={{minHeight: '80vh', backgroundColor: '#F8F8F8'}}>
          <Container>
            <Row>
              <Col md='6'>
                <img src={precipice} alt='precipice' style={{width: '100%'}} />
              </Col>
              <Col md='6'>
                <h4>PICA is pleased to announce Round 7 of the Precipice Fund, a program of the Andy Warhol Foundation for the Visual Arts’ Regional Regranting Program.Precipice Fund supports unincorporated, collaborative, visual art projects, programs and spaces in the greater Portland, Astoria, and Eugene areas of Oregon. Up to 20 grants of $500-$5,000 each will be made, for a total of $60,000 in funding. </h4>
                <h4>We encourage applications from first-time grant writers, artists from underrepresented communities, and artists who reflect the region’s diversity of cultures, aesthetics, and creative practices. </h4>
                <h4>You can view a list of new grant recipients and their project here. Our Grant Guidelines remain fairly consistent from year to year. To familiarize yourself with the application process and eligibility criteria, you may download a copy of our most recent Grant Guidelines and Budget Form below.</h4>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xl='12'>
          <PicaPrecipiceList />
        </Col>
        <Col xl='12'>
          <Container>
            <Row>
              <Col xl='12'>
                <h1>Our Supporters</h1>
                <p>Precipice Fund is administered with lead support from the Andy Warhol Foundation for the Visual Arts as part of the Regional Regranting Program of the Andy Warhol Foundation for the Visual Arts. Additional support has been provided by the Calligram Foundation/Allie Furlotti and the Oregon Community Foundation.</p>
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <a href='https://warholfoundation.org/'><img style={{width: '75%'}} src='https://pica.org/wp-content/uploads/2013/03/Warhol-Foundatin-new.png' alt='Warhol' /></a>
              </Col>
              <Col md='6'>
                <img style={{width: '75%'}} src='https://pica.org/wp-content/uploads/2013/03/calligram_foundation@2x-300x200.png' alt='Calligram' />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}
