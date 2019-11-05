import React, { useEffect } from 'react'
import { Container, Col, Row } from 'reactstrap'
import PicaEventList from '../../components/PicaEventList'

export default function Events (props) {
  let tag = ''
  if(props.location.search !== ''){
    tag = props.location.search.slice(5)
    tag = tag.replace("%20", " ")
  }

  useEffect(() => {
    document.getElementById('Events').scrollIntoView()
  })
  
  return (
    <Container id='Events' style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto'}}>
      <Row style={{height: '100%'}}>
        <Col xl='12' style={{height: '100vh'}}>
          <PicaEventList tag={tag}/>
        </Col>
      </Row>
    </Container>
  )
}
