import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import TBAArtistBlockFrame from '../../components/TBAArtistBlockFrame'
import PicaButton from '../../components/PicaButton'
import TBATextReveal from '../../components/TBATextReveal'

import katja from '../../img/katja.jpg'
import TBALogo from '../../img/tba18_t-rhythm.svg'

export default function TBA (props) {
  return (
    <Container className='TBA' style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto', overflowX: 'hidden'}}>
      <div style={{height: '100vh', width: '100vw', backgroundImage: 'url(' + katja + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'fixed'}} />
      <Row style={{margin: '0', overflowX: 'hidden', paddingTop: '5vh'}}>
        <Col xl='12' style={{height: '15vh'}}>
          <ul style={{display: 'flex', justifyContent: 'space-between', textAlign: 'left', listStyle: 'none', gridColumn: 'col-start/span 12', gridRow: '1', padding: '0px', margin: '0px'}}>
            <li><span style={{ width: '60px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '1.5vw', color: 'white' }}>2019</span></li>
            <li><span style={{ width: '60px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '1.5vw', color: 'white' }}>2019 <br />Time Based Art Festival</span></li>
            <li><span style={{ width: '60px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '1.5vw', color: 'white' }}>2019</span></li>
            <li><span style={{ width: '60px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '1.5vw', color: 'white' }}>2019 September 5&ndash;&#x2060;15</span></li>
            <li><span style={{ width: '60px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '1.5vw', color: 'white' }}>2019</span></li>
            <li><span style={{ width: '60px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '1.5vw', color: 'white' }}>2019</span></li>
            <li><span style={{ width: '60px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '1.5vw', color: 'white' }}>2019</span></li>
            <li><span style={{ width: '60px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '1.5vw', color: 'white' }}>2019</span></li>
          </ul>
        </Col>
        <Col xl='12' style={{height: '85vh', width: '100%', paddingTop: '60vh'}}>
          <img src={TBALogo} style={{width: '100%'}} alt='TBA logo' />
        </Col>
        <Col xl='12' style={{width: '100%', backgroundColor: 'white', color: 'black', padding: '0vh 20px 20vh 20px'}}>
          <Container style={{height: '100%', textAlign: 'left'}}>
            <Row>
              <Col xl='12' style={{height: '5vh'}} />
              <Col xl='1' style={{padding: '0'}} />
              <Col xl='4'>
                <h1 style={{fontSize: '3.75rem'}}>IMMERSE YOURSELF IN THE ART AND IDEAS OF OUR TIME</h1>
                <h2 style={{fontSize: '2.75rem'}}>2019 SEPTEMBER 05&ndash;15</h2>
                <h2 style={{fontSize: '2.75rem'}}>PORTLAND OREGON USA</h2>
              </Col>
              <Col xl='6'>
                <br style={{lineHeight: '10rem'}} />
                <h4>
                  PICA’s 17th Annual Time-Based Art Festival (TBA) gathers artists and audiences from around the world for ten days of contemporary performance, music, visual art, film, workshops, lectures, food, drink, conversation, and celebration. Immerse yourself in the art and ideas of our time.
                </h4>
                <h4>
                  Festival passes are now on sale! The complete TBA schedule and artist lineup&mdash;including performances, late-night shows, screenings, parties, public programs, partnerships, and more--will be announced soon! To stay up to date (and to purchase tickets as soon as they go on sale) visit our website, follow us on social media, and sign up for our email list at pica.org.
                </h4>
              </Col>
              <Col xl='1' style={{padding: '0'}} />
              <Col xl='5' />
              <Col xl='5' style={{textAlign: 'center'}}>
                <PicaButton>
                  <a style={{display: 'inline-flex'}} href='#passInfo'><h4 style={{margin: '12px 12px 12px 12px'}}>BUY PASSES AND TICKETS &rarr;</h4></a>
                </PicaButton>
              </Col>
              <Col xl='2' />
            </Row>
            <TBATextReveal />
            <Row style={{marginTop: '12px'}}>
              <Col xl='5'></Col>
              <Col xl='5' style={{textAlign: 'center'}}>
                <PicaButton>
                  <a style={{display: 'inline-flex'}} href='https://drive.google.com/file/d/18TZ-KhumkqYhZ_yJQQFVZKKVDx4C7sbB/view'><h4 style={{margin: '12px 12px 12px 12px'}}>DOWNLOAD THE CATALOG &rarr;</h4></a>
                </PicaButton>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xl='12' style={{width: '100%', backgroundColor: 'black', color: 'white', padding: '0vh 20px 20vh 20px'}}>
          <Container style={{height: '100%', textAlign: 'left'}}>
            <Row>
              <Col xl='12' style={{padding: '5vh 0px 5vh 0px'}}>
                <ul style={{display: 'flex', justifyContent: 'space-between', textAlign: 'left', listStyle: 'none', gridColumn: 'col-start/span 12', gridRow: '1', padding: '0px', margin: '0px'}}>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'white' }}>2019</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'white' }}>2019</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'white' }}>2019</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'white' }}>2019</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'white' }}>2019 <br />FESTIVAL LINE-UP</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'white' }}>2019</span></li>
                </ul>
              </Col>
              <TBAArtistBlockFrame />
            </Row>
          </Container>
        </Col>
        <Col xl='12' style={{width: '100%', backgroundColor: 'white', color: 'black', padding: '0vh 20px 20vh 20px'}}>
          <Container style={{height: '100%', textAlign: 'left'}} id='passInfo'>
            <Row>
              <Col xl='12' style={{padding: '5vh 0px 5vh 0px'}}>
                <ul style={{display: 'flex', justifyContent: 'space-between', textAlign: 'left', listStyle: 'none', gridColumn: 'col-start/span 12', gridRow: '1', padding: '0px', margin: '0px'}}>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'black' }}>2019</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'black' }}>2019</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'black' }}>2019</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'black' }}>2019</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'black' }}>2019 <br />FESTIVAL PASSES</span></li>
                  <li><span style={{ width: '200px', display: 'block', textTransform: 'uppercase', lineHeight: '.9', fontSize: '3vw', color: 'black' }}>2019</span></li>
                </ul>
              </Col>
              <Col xl='12' style={{height: '5vh'}} />
              <Col xl='1' />
              <Col xl='6' style={{textAlign: 'center'}}>
                <PicaButton>
                  <a style={{display: 'inline-flex'}} href='https://www.pica.org/tickets/tba19/details'><h4 style={{margin: '12px 12px 12px 12px'}}>PURCHASE A PASS &rarr;</h4></a>
                </PicaButton>
              </Col>
              <Col xl='5' />
              <Col xl='12' style={{height: '5vh'}} />
              <Col xl='3' style={{padding: '0'}} />
              <Col xl='8'>
                <h2>LATE-NIGHT PASS</h2>
                <h4>$48 Member/ $60 General</h4>
                <p>All-access to Late-Night shows</p>
                <br />
                <h2>ENTHUSIAST PASS</h2>
                <h4>$120 Member/$150 General</h4>
                <p>Tickets to six (6) mainstage performances of your choice plus all-access to exhibitions, Institute programs, and Late Night.</p>
                <br />
                <h2>IMMERSION PASS</h2>
                <h4>$200 Member/ $250 General</h4>
                <p>Priority admission to performances and unlimited access to exhibitions, Institute, and Late Night. </p><br />
                <h2>PATRON PASS</h2>
                <h4>$500 ($250 is tax deductible)</h4>
                <p>Priority admission to all performances, festival concierge service, and unlimited access to exhibitions, Institute programs, and Late Night.</p>
                <br />
              </Col>
              <Col xl='1' style={{padding: '0'}} />
              <Col xl='1' />
              <Col xl='6' style={{textAlign: 'center'}}>
                <PicaButton>
                  <a style={{display: 'inline-flex'}} href='https://www.pica.org/tickets/tba19/details'><h4 style={{margin: '12px 12px 12px 12px'}}>PURCHASE A PASS &rarr;</h4></a>
                </PicaButton>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <style dangerouslySetInnerHTML={{__html: `
      .d-flex.align-items-center::before { content: ""; display: block; padding-top: 100%; }
      .TBAArtistBlock:hover .d-flex.align-items-center {-webkit-filter: url(#duotone_yellow); -moz-filter: url(#duotone_yellow); filter: url(#duotone_yellow);}
      .TBAArtistBlock:hover { color: #fff100; cursor: pointer; }
     `}} />

      <span dangerouslySetInnerHTML={{__html:`
	      <svg xmlns="http://www.w3.org/2000/svg">
			<defs>
			<filter id="duotone_yellow">
			<feColorMatrix type="matrix" result="grayscale" values="1 0 0 0 0
					                    1 0 0 0 0
					                    1 0 0 0 0
					                    0 0 0 1 0">
			</feColorMatrix>
			<feComponentTransfer color-interpolation-filters="sRGB" result="duotone">
			<feFuncR type="table" tableValues="0 1"></feFuncR>
			<feFuncG type="table" tableValues="0 0.946"></feFuncG>
			<feFuncB type="table" tableValues="0 0"></feFuncB>
			<feFuncA type="table" tableValues="1 1"></feFuncA>
			</feComponentTransfer>
			</filter>
			</defs>
			</svg>
	      `}} />

    </Container>
  )
}
