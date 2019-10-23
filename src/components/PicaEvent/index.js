import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import PicaButton from '../PicaButton'

import styles from './styles.module.css'

class PicaEvent extends Component {

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

  renderArtistNames(){
    if (this.props.artists) {
      let artistNames = ''
      this.props.artists.forEach((artist, index) => {
        if(index === 0){
          artistNames += (artist.name)
        } else {
          artistNames += (' and ' + artist.name)
        }
      })
      return(
        artistNames
      )
    }
  }

  renderTicketButton(){
    if(this.props.webEventId){
      return(
        <PicaButton>
          <Link className={styles.ticketButton} to={'/tickets/' + this.props.webEventId}>Buy Tickets &rarr;</Link>
        </PicaButton>   
      )
    }
  }

  renderTags(){
    if(this.props.tags.length === 0){
      return(
        <p>Pica Event</p>
      )
    } else {
      let tags = []
      for(let i=0; i < this.props.tags.length; i++){
        if(i + 1 === this.props.tags.length){
          tags.push(
            <Link to={{
              pathname: '/events',
              search: '?tag=' + this.props.tags[i].name
            }}>{this.props.tags[i].name}</Link>
          )
        } else {
          tags.push(
            <Link to={'events?tag=' + this.props.tags[i].name}>{this.props.tags[i].name}</Link>
          )
          tags.push(', ')
        }
      }
      return(
        <p>Tags: {tags}</p>
      )
    }
  }

  /* The PicaEvent returns in 4 parts.
  The first is the block as appears on the TBA page on desktop: TBAArtistBlock
  The second is the block as appears on the TBA page on mobile: TBAArtistBlockMobile
  The third is the modal that pops up to display youtube or vimeo videos: videoModal
  The fourth is the artist overlay that appears when clicking the block: artistOverlay
   */
  render() {
    return (
      <Container>
        <Row>
          <Col className={styles.NavBar} md='3'>
            <h4>Event</h4>
            <p>{this.props.eventName}</p>
            <h4>Tags</h4>
            {this.renderTags()}
            <h4>Artist</h4>
            <p>{this.renderArtistNames()}</p>
            <h4>Date</h4>
            <p>{this.props.eventDate}</p>
            <h4>Price</h4>
            <p>{this.props.price}</p>
            {this.renderTicketButton()}
          </Col>
          <Col className={styles.Content} md='9'>
            <h1>{this.props.eventName}</h1>
            <img style={{width: '100%', height: 'auto', margin: 'auto'}} src={'https://media.graphcms.com/' + this.resizeMedia(this.props.galleryItems[0].media)} alt={'Photo: ' + this.props.galleryItems[0].media.photoCredit} title={this.props.galleryItems[0].media.photoCredit ? 'Photo: ' + this.props.galleryItems[0].media.photoCredit : 'Courtesy of the artist'} />
            <p className={styles.lede}>{this.props.detailsShort}</p>
            <div className={styles.detailsLong} dangerouslySetInnerHTML={{ __html: this.props.detailsLong }} />
          </Col>
        </Row>
      </Container>
    )
  }
}

PicaEvent.defaultProps = {
  eventName: 'Event Name',
  eventDate: ['Event Name'],
  title: 'Event Name',
  artistName: 'Event Name',
  detailsShort: `Event Name`,
  detailsLong: `Event Name`,
  YouTubeId: '',
  VimeoId: '',
  galleryItems: []
}

PicaEvent.propTypes = {
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

export default PicaEvent
