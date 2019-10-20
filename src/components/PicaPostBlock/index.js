import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './styles.module.css'

class TBAArtistBlock extends Component {
  constructor(props) {
    super(props)
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
