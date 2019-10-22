import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

  /* The PicaArtist returns in 4 parts.
  The first is the block as appears on the TBA page on desktop: TBAArtistBlock
  The second is the block as appears on the TBA page on mobile: TBAArtistBlockMobile
  The third is the modal that pops up to display youtube or vimeo videos: videoModal
  The fourth is the artist overlay that appears when clicking the block: artistOverlay
   */

  renderEvents(){
    if(this.props.events.length === 0){
      return(
        <h4>No Events</h4>
      )
    } else {
      let events = []
      this.props.events.forEach((event, index) => {
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
            <img style={{width: '100%', height: 'auto', margin: 'auto'}} src={'https://media.graphcms.com/' + this.resizeMedia(this.props.media[0])} alt={'Photo: ' + this.props.galleryItems[0].media.photoCredit} title={this.props.galleryItems[0].media.photoCredit ? 'Photo: ' + this.props.galleryItems[0].media.photoCredit : 'Courtesy of the artist'} />
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: this.props.detailsLong }} />
            {this.renderEvents()}
          </Col>
        </Row>
      </Container>
    )
  }
}

PicaArtist.defaultProps = {
  name: 'Event Name',
  events: ['Event Name'],
  title: 'Event Name',
  artistName: 'Event Name',
  detailsShort: `Event Name`,
  detailsLong: `Event Name`,
  YouTubeId: '',
  VimeoId: '',
  galleryItems: []
}

PicaArtist.propTypes = {
  eventName: PropTypes.string,
  eventDate: PropTypes.array,
  webEventId: PropTypes.string,
  artistName: PropTypes.string,
  detailsShort: PropTypes.string,
  detailsLong: PropTypes.string,
  YouTubeId: PropTypes.string,
  VimeoId: PropTypes.string,
  galleryItems: PropTypes.array
}

export default PicaArtist
