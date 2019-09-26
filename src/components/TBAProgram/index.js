import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

import styles from './styles.module.css'

class TBAProgram extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      artistOverlay: false,
      thumbnailURL: ''
    }
    this.toggle = this.toggle.bind(this)
    this.toggle2 = this.toggle2.bind(this)
    this.renderIFrame = this.renderIFrame.bind(this)
  }

  componentWillMount() {
    if ((!this.props.YouTubeId) && (this.props.VimeoId)) {
      fetch('https://vimeo.com/api/oembed.json?url=https://vimeo.com/' + this.props.VimeoId)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            this.setState({thumbnailURL: result.thumbnail_url})
          },
          (error) => {
            if (error) {
              console.log(error)
            }
            this.setState({
              urls: ['error']
            })
          }
        )
    } else if (this.props.YouTubeId) {
      this.setState({
        thumbnailURL: 'https://i.ytimg.com/vi/' + this.props.YouTubeId + '/mqdefault.jpg'
      })
    } else {
      this.setState({
        thumbnailURL: 'https://media.graphcms.com/' + this.resizeMedia(this.props.galleryItems[0].media)
      })
    }
  }

  handleShort(string) {
    if (string.length <= 200) {
      return string
    }
    const newString = string.slice(0, 197)
    return newString + '...'
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  toggle2() {
    this.setState(prevState => ({
      artistOverlay: !prevState.artistOverlay
    }))
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

  renderIFrame() {
    if (this.props.YouTubeId) {
      return (
        <iframe id='player' type='text/html' title='YouTubeIFrame' width='100%' height='320px' allowFullScreen src={'//www.youtube.com/embed/' + this.props.YouTubeId} style={{frameBorder: '0'}} />
      )
    } else if (this.props.VimeoId) {
      return (
        <iframe id='player' type='text/html' title='VimeoIFrame'width='100%' height='360px' allowFullScreen src={'//player.vimeo.com/video/' + this.props.VimeoId} style={{frameBorder: '0'}} />
      )
    } else {
      return (
        <img src='https://www.retirebeforedad.com/wp-content/uploads/2016/07/Banana-Stand-500x372.jpg' alt='bananas' />
      )
    }
  }

  renderVideos() {
    if (this.props.YouTubeId) {
      return (
        <div className={'d-flex align-items-center'} style={{height: '400px', minWidth: '296px', margin: 'auto', position: 'relative', textAlign: 'center'}}>
          <div style={{width: '100%', position: 'relative'}}>
            <img src={this.props.YouTubeId ? 'https://i.ytimg.com/vi/' + this.props.YouTubeId + '/mqdefault.jpg' : 'https://www.retirebeforedad.com/wp-content/uploads/2016/07/Banana-Stand-500x372.jpg'} alt='thumbnail' style={{marginTop: '20px', marginBottom: '20px', maxWidth: '100%', maxHeight: '153px', zIndex: 1}} />
            <div onClick={this.toggle} className={styles.videoOverlay}>
              <i className='fas fa-play' style={{fontSize: '64px', paddingTop: '64px', color: '#f8f8f8'}} />
            </div>
          </div>
        </div>
      )
    }
    if (this.props.VimeoId) {
      return (
        <div className={'d-flex align-items-center'} style={{height: '400px', minWidth: '296px', margin: 'auto', position: 'relative', textAlign: 'center'}}>
          <div style={{width: '100%', position: 'relative'}}>
            <img src={this.props.VimeoId ? this.state.thumbnailURL : 'https://www.retirebeforedad.com/wp-content/uploads/2016/07/Banana-Stand-500x372.jpg'} alt='thumbnail' style={{marginTop: '20px', marginBottom: '20px', maxWidth: '100%', maxHeight: '153px', zIndex: 1}} />
            <div onClick={this.toggle} className={styles.videoOverlay}>
              <i className='fas fa-play' style={{fontSize: '64px', paddingTop: '64px', color: '#f8f8f8'}} />
            </div>
          </div>
        </div>
      )
    }
  }

  renderPhotos() {
    if (this.props.galleryItems[0]) {
      const photos = this.props.galleryItems.map((item, index) =>
        <img key={index} style={{height: '100%', width: 'auto', margin: 'auto'}} src={'https://media.graphcms.com/' + this.resizeMedia(item.media)} alt={'image ' + index} title={item.media.photoCredit ? 'Photo: ' + item.media.photoCredit : 'Courtesy of the artist'} />
      )
      return (
        photos
      )
    }
  }

  resizeMedia(media) {
    if ((media.width > 800) || (media.height > 800)){
      if(media.width >= media.height){
        console.log('width' +  media.handle)
        return ('resize=width:800/' + media.handle)
      } else {
        console.log('height' + media.handle)
        return ('resize=height:800/' + media.handle)
      }
    } else {
      console.log('none')
      return media.handle
    }
  }

  renderTicketButton(){
    if(this.props.webEventId){
      return(
            <a className={styles.ticketButton} href={'https://www.pica.org/tickets/' + this.props.webEventId}>Buy Tickets &rarr;</a>
      )
    }
  }
  /* The TBAProgram returns in 4 parts.
  The first is the block as appears on the TBA page on desktop: TBAArtistBlock
  The second is the block as appears on the TBA page on mobile: TBAArtistBlockMobile
  The third is the modal that pops up to display youtube or vimeo videos: videoModal
  The fourth is the artist overlay that appears when clicking the block: artistOverlay
   */
  render() {
    return (
      <div style={{width: '100%'}} className={styles.TBAProgram}>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={styles.videoModal} style={{backgroundColor: '#000'}}>
          <ModalHeader toggle={this.toggle} style={{backgroundColor: '#000', color: '#fff'}}>{this.props.eventName + ' - ' + this.props.artistName}</ModalHeader>
          <ModalBody style={{backgroundColor: '#000'}}>
            {this.renderIFrame()}
          </ModalBody>
        </Modal>
        <div className={styles.artistOverlay}>
          <div style={{padding: '5vw', overflowX: 'hidden', overflowY: 'scroll', height: 'auto'}}>
            <div id={styles.backButton} style={{display: 'inline-flex'}}>
            <a href='https://www.pica.org/tba'><h1 style={{color: '#fff100', textAlign: 'left', textTransform: 'uppercase'}}>&larr; Back to TBA</h1></a>
            </div>

            <div className={styles.imageSlider + ' d-flex flex-row'}>
              {this.renderVideos()}
              {this.renderPhotos()}
            </div>

            <hgroup className={styles.TBAArtistHeds}>
            	{this.renderArtistNames() ? <h1>{this.renderArtistNames()}</h1> : null}
				      <h1>{this.props.eventName}</h1>
			      </hgroup>

            {this.renderTicketButton()}

            <div className={styles.showInfo}>
              <dl>
                <dt>Date</dt>
                <dd>{this.props.eventDate}</dd>
              </dl>
              <dl>
                <dt>Location</dt>
                <dd>{this.props.venue.name}, <a target='_blank' rel='noopener noreferrer' href={'https://maps.google.com/?q=' + this.props.venue.address + ' Portland, OR'}>{this.props.venue.address}</a></dd>
              </dl>
              <dl>{this.props.price ? <dt>Ticket</dt> : <dt>Free</dt> } {this.props.price ? <dd>{this.props.price}</dd> : ''}</dl>
              <dl>            	
                <dl>{this.props.runTime ? <dt>Run Time</dt> : null}{this.props.runTime ? <dd>{this.props.runTime}</dd> : null}</dl>
                <dl>{this.props.venue.capacity ? <dt>Capacity</dt> : null}{this.props.venue.capacity ? <dd>{this.props.venue.capacity}</dd> : null}</dl>
              </dl>
            </div>

            <p className={styles.lede}>{this.props.detailsShort}</p>
            <div className={styles.detailsLong} dangerouslySetInnerHTML={{ __html: this.props.detailsLong }} />

            <hr style={{margin: '3vh 0', borderTop: '2px solid #fff'}} />

            <div id={styles.backButton} onClick={this.toggle2} style={{display: 'inline-flex'}}>
              <a href='https://www.pica.org/tba'><h1 style={{color: '#fff100', textAlign: 'left', textTransform: 'uppercase'}}>&larr; Back to TBA</h1></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TBAProgram.defaultProps = {
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

TBAProgram.propTypes = {
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

export default TBAProgram
