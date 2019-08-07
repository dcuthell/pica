import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import PicaButton from '../PicaButton'
import { Link } from 'react-router-dom'

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
        thumbnailURL: 'https://media.graphcms.com/' + this.props.galleryItems[0].media.handle
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
          artistNames += (' & ' + artist.name)
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
        <img key={index} style={{height: '400px', margin: 'auto'}} src={'https://media.graphcms.com/' + item.media.handle} alt={'image ' + index} title={item.media.photoCredit ? 'Photo Credit: ' + item.media.photoCredit : 'PICA - TBA 2019'} />
      )
      return (
        photos
      )
    }
  }

  renderTicketButton(){
    if(this.props.webEventId){
      return(
        <div style={{width: '400px', display: 'inline-flex', textAlign: 'center'}}>
          <PicaButton style={{margin: '0px'}}>
            <a style={{display: 'inline-flex'}} href={'https://www.pica.org/tickets/' + this.props.webEventId + '/details'}><h4 style={{margin: '12px 12px 12px 12px'}}>TICKETS &#x2192;</h4></a>
          </PicaButton>
        </div>
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
      <div style={{width: '100%'}} className='TBAProgram'>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={styles.videoModal} style={{backgroundColor: 'black'}}>
          <ModalHeader toggle={this.toggle} style={{backgroundColor: 'black', color: 'white'}}>{this.props.eventName + ' - ' + this.props.artistName}</ModalHeader>
          <ModalBody style={{backgroundColor: 'black'}}>
            {this.renderIFrame()}
          </ModalBody>
        </Modal>
        <div className={styles.artistOverlay}>
          <div style={{padding: '5vw', overflowX: 'hidden', overflowY: 'scroll', height: 'auto'}}>
            <div id={styles.backButton} style={{display: 'inline-flex'}}>
              <Link to='/tba'><h1 style={{color: '#fff100', textAlign: 'left'}}>&#x2190; BACK TO TBA</h1></Link>
            </div>
            <hr style={{margin: '0px', borderTop: 'white solid 5px'}} />
            <div className={styles.imageSlider + ' d-flex flex-row'} style={{height: '400px', width: 'auto', overflowY: 'hidden', overflowX: 'scroll'}}>
              {this.renderVideos()}
              {this.renderPhotos()}
            </div>
            <hr style={{margin: '0px', borderTop: 'white solid 5px'}} />
            <h1>{this.renderArtistNames()}</h1>
            <h1 style={{textTransform: 'uppercase'}}>{this.props.eventName}</h1>
            <hr style={{margin: '0px', borderTop: 'white solid 5px'}} />
            <div style={{display: 'inline-flex'}}>
              <h4 style={{color: '#B9B9B9', marginRight: '12px'}}>
                Date
                <br/>
                {this.props.runTime ? 'Duration' : ''}
              </h4>
              <h4>
                {this.props.eventDate}
                <br/>
                {this.props.runTime ? this.props.runTime : ''}
              </h4>
            </div>
            <hr style={{margin: '0px', borderTop: 'white solid 5px'}} />
            <div style={{display: 'inline-flex'}}>
              <h4 style={{color: '#B9B9B9', marginRight: '12px'}}>
                Venue
                <br/>
                Address
                <br/>
                {this.props.venue.capacity ? 'Capacity' : ''}
              </h4>
              <h4>
                {this.props.venue.name}
                <br/>
                <a target='_blank' rel='noopener noreferrer' href={'https://maps.google.com/?q=' + this.props.venue.address + ' Portland, OR'}>{this.props.venue.address}</a>
                <br/>
                {this.props.venue.capacity ? this.props.venue.capacity : ''}
              </h4>
            </div>
            <hr style={{margin: '0px', borderTop: 'white solid 5px'}} />
            <div style={{display: 'inline-flex'}}>
              <h4 style={{color: '#B9B9B9', marginRight: '12px'}}>
                {this.props.price ? 'Price' : ''}
              </h4>
              <h4>
                {this.props.price ? this.props.price : ''}
              </h4>
              {this.renderTicketButton()}
            </div>
            <hr style={{margin: '0px', borderTop: 'white solid 5px'}} />
            <h4>{this.props.detailsShort}</h4>
            <div dangerouslySetInnerHTML={{ __html: this.props.detailsLong }} />
            <hr style={{margin: '0px', borderTop: 'white solid 5px'}} />
            <div id={styles.backButton} onClick={this.toggle2} style={{display: 'inline-flex'}}>
              <Link to='/tba'><h1 style={{color: '#fff100', textAlign: 'left'}}>&#x2190; BACK TO TBA</h1></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TBAProgram.defaultProps = {
  eventName: 'Event Name',
  eventDate: 'TBD',
  title: 'Rice is dope',
  artistName: 'Bob Miller',
  detailsShort: `...resting in the sweet cocoon of knowledge that I'm pretty sure I was her first, and that she would remember this night for a long, loong time...and that eventually, she would have to seek therapy...`,
  detailsLong: `...resting in the sweet cocoon of knowledge that I'm pretty sure I was her first, and that she would remember this night for a long, loong time...and that eventually, she would have to seek therapy......resting in the sweet cocoon of knowledge that I'm pretty sure I was her first, and that she would remember this night for a long, loong time...and that eventually, she would have to seek therapy......resting in the sweet cocoon of knowledge that I'm pretty sure I was her first, and that she would remember this night for a long, loong time...and that eventually, she would have to seek therapy...`,
  YouTubeId: '',
  VimeoId: '',
  galleryItems: []
}

TBAProgram.propTypes = {
  eventName: PropTypes.string,
  eventDate: PropTypes.string,
  webEventId: PropTypes.string,
  artistName: PropTypes.string,
  detailsShort: PropTypes.string,
  detailsLong: PropTypes.string,
  YouTubeId: PropTypes.string,
  VimeoId: PropTypes.string,
  galleryItems: PropTypes.array
}

export default TBAProgram
