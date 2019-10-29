import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaCarouselFrame from '../../components/PicaCarouselFrame'
import PicaEventReelFrame from '../../components/PicaEventReelFrame'
import PicaButton from '../../components/PicaButton'
import collage from '../../img/collage.png'
import ben from '../../img/ben-01.png'

export default function Home (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto', overflowX: 'hidden'}}>
      <Row style={{margin: '0px'}}>
        <Col xl='12' style={{padding: '0px'}}>
          <div style={{height: '100%', backgroundColor: '#F8F8F8'}}>
            <PicaCarouselFrame />
          </div>
        </Col>
        <Col xl='12' style={{padding: '0px', backgroundColor: 'white'}}>
          <h1>Visit</h1>
          <h4>We're open to the public Tuesday through Friday, 11am-6pm</h4>
          <img src={collage} style={{width: '80%'}} alt='collage' />
          <h4>We've moved! Stop by and check</h4>
          <h4>out our new permanent location</h4>
        </Col>
        <Col xl='12' style={{minHeight: '0vh', padding: '0px', backgroundColor: '#ECDDBB'}}>
          <img src={ben} alt='ben' />
          <h3>Like what you see? Help us grow our archive of</h3>
          <h3 style={{paddingBottom: '60px'}}>contemporary art by becoming a donor!</h3>
          <PicaButton style={{position: 'absolute', bottom: '10px', left: '20%', width: '60%'}}>
            <a href='https://system.spektrix.com/pica/website/Donations.aspx?resize=true'><p style={{margin: '4px 0px 4px 0px'}}>DONATE</p></a>
          </PicaButton>
        </Col>
        <Col xl='12' style={{padding: '0px', backgroundColor: '#FFFBF3'}}>
          <h1>Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
          </p>
        </Col>
        <Col xl='12' style={{height: '60vh', padding: '0px'}}>
          <div style={{height: '100%', backgroundColor: '#F8F8F8'}}>
            <PicaEventReelFrame />
          </div>
        </Col>
      </Row>
    </Container>
  )
}
