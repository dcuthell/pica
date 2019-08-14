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
        <img key={index} style={{height: '100%', width: 'auto', margin: 'auto'}} src={'https://media.graphcms.com/' + item.media.handle} alt={'image ' + index} title={item.media.photoCredit ? 'Photo: ' + item.media.photoCredit : 'Courtesy of the artist'} />
      )
      return (
        photos
      )
    }
  }

  render() {
    return (
      <div className={'TBAArtistBlock_wrap'}>
        <div className={styles.TBAArtistBlock}>
          <div className='d-flex align-items-center' style={{backgroundImage: 'url(https://media.graphcms.com//' + this.props.galleryItems[0].media.handle + ')'}} />
          <dl>
            <dt>{this.renderArtistNames()}</dt>
            <dd>{this.props.eventName}</dd>
          </dl>
          <Link to={'/tba/' + this.props.route} className={styles.overlay}/>
        </div>
        <Link to={'/' + this.props.route} className={styles.TBAArtistBlockMobile}>
          <div className='d-flex align-items-center' style={{textAlign: 'center', height: '135px', width: '135px', border: '2px solid white', margin: 'auto'}}>
            <img src={this.props.galleryItems[0].media.handle ? 'https://media.graphcms.com/' + this.props.galleryItems[0].media.handle : 'https://www.retirebeforedad.com/wp-content/uploads/2016/07/Banana-Stand-500x372.jpg'}
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
  eventDate: 'TBD',
  title: 'Rice is dope',
  artistName: 'Bob Miller',
  detailsShort: `...resting in the sweet cocoon of knowledge that I'm pretty sure I was her first, and that she would remember this night for a long, loong time...and that eventually, she would have to seek therapy...`,
  detailsLong: `...resting in the sweet cocoon of knowledge that I'm pretty sure I was her first, and that she would remember this night for a long, loong time...and that eventually, she would have to seek therapy......resting in the sweet cocoon of knowledge that I'm pretty sure I was her first, and that she would remember this night for a long, loong time...and that eventually, she would have to seek therapy......resting in the sweet cocoon of knowledge that I'm pretty sure I was her first, and that she would remember this night for a long, loong time...and that eventually, she would have to seek therapy...`,
  YouTubeId: '',
  VimeoId: '',
  galleryItems: []
}

TBAArtistBlock.propTypes = {
  eventName: PropTypes.string,
  eventDate: PropTypes.string,
  artistName: PropTypes.string,
  detailsShort: PropTypes.string,
  detailsLong: PropTypes.string,
  YouTubeId: PropTypes.string,
  VimeoId: PropTypes.string,
  galleryItems: PropTypes.array
}

export default TBAArtistBlock
