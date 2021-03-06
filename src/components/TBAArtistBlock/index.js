import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

class TBAArtistBlock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      artistOverlay: false,
      thumbnailURL: 'https://media.graphcms.com/' + this.resizeMedia(this.props.galleryItems[0].media)
    }
    this.toggle = this.toggle.bind(this)
    this.toggle2 = this.toggle2.bind(this)
    this.renderIFrame = this.renderIFrame.bind(this)
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
  //Resizes image if height or width exceeds 800, returns resize + handle
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

  render() {
    return (
      <div className={'TBAArtistBlock_wrap'}>
        <div className={styles.TBAArtistBlock}>
          <div className='d-flex align-items-center' style={{backgroundImage: 'url(https://media.graphcms.com/' + this.resizeMedia(this.props.galleryItems[0].media) + ')'}} />
          <dl>
            <dt>{this.renderArtistNames()}</dt>
            <dd>{this.props.eventName}</dd>
          </dl>
          <Link to={'/tba/' + this.props.route} className={styles.overlay}/>
        </div>
        <Link to={'/tba/' + this.props.route} className={styles.TBAArtistBlockMobile}>
          <div className='d-flex align-items-center' style={{textAlign: 'center', height: '135px', width: '135px', border: '2px solid white', margin: 'auto'}}>
            <img src={this.props.galleryItems[0].media.handle ? 'https://media.graphcms.com/' + this.resizeMedia(this.props.galleryItems[0].media) : 'https://www.retirebeforedad.com/wp-content/uploads/2016/07/Banana-Stand-500x372.jpg'}
              alt='thumbnail'
              style={{margin: 'auto', maxWidth: '100%', maxHeight: '100%', zIndex: 1}} />
          </div>
          <div style={{width: '135px', margin: 'auto', backgroundColor: 'black', color: 'white'}}>
            <h3 style={{margin: '0px'}}>{this.renderArtistNames()}</h3>
            <h3 style={{textTransform: 'uppercase'}}>{this.props.eventName}</h3>
          </div>
        </Link>
      </div>
      
    )
  }
}

TBAArtistBlock.defaultProps = {
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

TBAArtistBlock.propTypes = {
  eventName: PropTypes.string,
  eventDate: PropTypes.array,
  artistName: PropTypes.string,
  detailsShort: PropTypes.string,
  detailsLong: PropTypes.string,
  YouTubeId: PropTypes.string,
  VimeoId: PropTypes.string,
  galleryItems: PropTypes.array
}

export default TBAArtistBlock
