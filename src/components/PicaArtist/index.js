import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import PicaButton from '../PicaButton'

import styles from './styles.module.css'

class PicaArtist extends Component {

  resizeMedia(media) {
    if ((media.width > 800) || (media.height > 800)){
      if(media.width >= media.height){
        return ('resize=width:800/' + media.handle)
      } else {
        return ('resize=height:800/' + media.handle)
      }
    } else {
      return media.handle
    }
  }

  renderEvents(){
    if(this.props.events.length === 0){
      return(
        <h4>No Events</h4>
      )
    } else {
      let events = []
      this.props.events.forEach((event, index) => {
        events.push(
          <h4>{event.title}</h4>
        )
        events.push(
          <PicaButton>
            <Link to={'/events/' + event.route}>Learn More</Link>
          </PicaButton>
        )
      })
      return events
    }
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>{this.props.name}</h1>
            
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: this.props.description }} />
            <h3>Events</h3>
            {this.renderEvents()}
          </Col>
        </Row>
      </Container>
    )
  }
}

PicaArtist.defaultProps = {
  name: 'Event Name',
  events: [],
  description: 'Event Name',
  media: ['Event Name'],
}

PicaArtist.propTypes = {
 
}

export default PicaArtist
