import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaButton from '../../components/PicaButton'

import resourceroompic from '../../img/programs_resourceroom_700.jpg'

export default function ResourceRoom (props) {
  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto', backgroundColor: 'white'}}>
      <Row style={{margin: '0px'}}>
        <Col xl='12'>
          <h1 style={{fontSize: '6rem', textAlign: 'left'}}>RESOURCE ROOM</h1>
        </Col>
        <Col xl='12'>
          <img src={resourceroompic} alt='resourceroom' style={{maxWidth: '90%', maxHeight: '100%'}} />
        </Col>
        <Col xl='12' style={{backgroundColor: '#F8F8F8'}}>
          <h3>
            Functioning both as an institutional archive and an open library on contemporary art, the Resource Room houses over 3,000 books and periodicals, including a video archive of performances and lectures presented by PICA.
          </h3>
          <p>
            It is a dynamic space for individuals to indulge their curiosity in contemporary art and to access a selection of unique materials not found in traditional libraries and bookstores.
          </p>
          <p>
            The Resource Room is a place gather and discuss ideas in contemporary art. Throughout the year, the space hosts many of PICA’s salons and lectures, but it's usually fairly quiet. It is the perfect place to spend an afternoon reading, watching a PICA performance on video, or investigating an artist or moment in contemporary history.
          </p>
          <p>
            The Resource Room is open to the public during public hours at PICA's West End offices.
          </p>
          <PicaButton>
            <p><a href='https://picarr.libib.com/'>Search the Resource Room catalog</a></p>
          </PicaButton>
        </Col>
        <Col xl='12' style={{backgroundColor: '#ECDDBB'}}>
          <h2>RESOURCE ROOM RESIDENCIES</h2>
          <p>
            In 2012, PICA initiated the Resource Room Residency (RRR) program to support the growing artistic interest in research as art and archive as material. The program encourages a consideration of libraries, archives, collections, and collecting, but can find outlets in many forms and disciplines. RRRs are provided with a modest stipend and unlimited access to our books, media, and ephemera for three month engagements. They intersect with PICA's members and the community at large through salon discussions, screenings, public performances, and printed materials.
          </p>
          <p>
            The Resource Room Residency program is presently on hiatus while we update and restructure the collection.
          </p>
        </Col>
      </Row>
    </Container>
  )
}
