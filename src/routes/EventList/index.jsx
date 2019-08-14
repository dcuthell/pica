import React from 'react'
import { Container, Col, Row } from 'reactstrap'

export default function EventList (props) {
  function scrollup() {
    setTimeout(function() { window.scrollTo(0, 0) }, 100)
  }

  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto'}}>
      <Row>
        <Col xl='12' style={{height: '10vh'}}>
          <h1>Event List</h1>
        </Col>
        <Col xl='12'>
          <div style={{height: '90vh', overflowY: 'scroll'}}>
            <iframe src='https://system.spektrix.com/pica/website/EventList.aspx?MonthSelect=20199&SortBy=Date' title='SpektrixIFrame' name='SpektrixIFrame' id='SpektrixIFrame' style={{frameBorder: '0', height: '100%', width: '80%', border: 'none'}} onLoad={scrollup()} />
          </div>
        </Col>
        <Col xl='12' style={{height: 'auto'}}>
          <h4>Experiencing Issues? Try disabling your ad-blockers, accepting cookies, or using another web browser such as Chrome. If you are using Safari, switch to a Private Window.</h4>
          <h4>Still Having Trouble? Please visit https://www.pica.org/cookies/ or call the Box Office at 503-224-PICA (7422).</h4>
        </Col>
      </Row>
    </Container>
  )
}
