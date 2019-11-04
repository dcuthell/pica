import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { NavLink, Link } from 'react-router-dom'

import PicaLogo from '../../img/PicaLogo.png'

class PicaCarouselCard extends Component {
  /*
  Here is how these cases are organized for n cards
  Start
  ---Index 0
  ---Index 1
  ---Index 2
  Finish
  ---index n-3
  ---index n-2
  ---index n-1
  In between
  ---left
  ---Center
  ---Right
  ---UnmountedLeft
  ---UnMountedRight
  ---Not shown
  */
  
  propsToStyles() {
    if (((this.props.index - this.props.activeIndex) === 0) && (this.props.index === 0)) {
      return styles.activeLeft
    } else if (((this.props.index - this.props.activeIndex) === 1) && (this.props.index === 1)) {
      return styles.inactiveRight2
    } else if (((this.props.index - this.props.activeIndex) === 2) && (this.props.index === 2)) {
      return styles.inactiveRight
    } else if (((this.props.index - this.props.activeIndex) <= -2) && (this.props.cardTotal - this.props.index === 3)) {
      return styles.inactiveLeft
    } else if (((this.props.index - this.props.activeIndex) <= -1) && (this.props.cardTotal - this.props.index === 2)) {
      return styles.inactiveLeft2
    } else if (((this.props.index - this.props.activeIndex) <= 0) && (this.props.cardTotal - this.props.index === 1)) {
      return styles.activeRight
    } else if (((this.props.index - this.props.activeIndex) === -1)) {
      return styles.inactiveLeft
    } else if (((this.props.index - this.props.activeIndex) === 0)) {
      return styles.active
    } else if (((this.props.index - this.props.activeIndex) === 1)) {
      return styles.inactiveRight
    } else if (((this.props.index - this.props.activeIndex) === -2)) {
      return styles.unmountedLeft
    } else if (((this.props.index - this.props.activeIndex) === 2)) {
      return styles.unmountedRight
    } else if (((this.props.index - this.props.activeIndex) <= -2) || ((this.props.index - this.props.activeIndex) >= 2)) {
      return styles.unmounted
    } else {
      console.log('error')
      return 'error'
    }
  }

  renderTags(){
    if(this.props.tags.length === 0){
      return(
        <p id={styles.tags}>Pica Event</p>
      )
    } else {
      let tags = []
      for(let i=0; i < this.props.tags.length; i++){
        if(i + 1 === this.props.tags.length){
          tags.push(
            <Link key={i} to={{
              pathname: '/events',
              search: '?tag=' + this.props.tags[i].name
            }}>{this.props.tags[i].name}</Link>
          )
        } else {
          tags.push(
            <Link key={i} to={'events?tag=' + this.props.tags[i].name}>{this.props.tags[i].name}</Link>
          )
          tags.push(', ')
        }
      }
      return(
        <p id={styles.tags}>{tags}</p>
      )
    }
  }

  render() {
    return (
      <div className={styles.PicaCarouselCard + ' ' + this.propsToStyles()} style={{backgroundColor: this.props.background}}>
        <div className={styles.cardImage} style={{backgroundImage: 'url(' + this.props.image + ')'}} />
        <div className={styles.card}>
          <h2 id={styles.title}>{this.props.title}</h2>
          <h4 id={styles.date}>{this.props.date}</h4>
          {this.renderTags()}
          <h4 id={styles.description}>{this.props.description}</h4>
          <div className={styles.buyButton}>
            <NavLink to={this.props.buttonLink}>{this.props.buttonText}</NavLink>
          </div>
        </div>
      </div>
    )
  }
}

PicaCarouselCard.defaultProps = {
  index: 0,
  activeIndex: 0,
  cardTotal: 0,
  title: 'An Event Name',
  date: 'July 11-13 / 25-27',
  image: PicaLogo,
  tags: ['Exhibition, Performance, Visual'],
  buttonText: 'Click Me',
  buttonLink: '/tba',
  description: `This is a short description about what the event is. This should be PICA's voice and description of the event, a quick takeaway for the user to understand...`
}

PicaCarouselCard.propTypes = {
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  cardTotal: PropTypes.number,
  style: PropTypes.object,
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  tags: PropTypes.array,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  description: PropTypes.string,
  background: PropTypes.string
}

export default PicaCarouselCard

/*
index 0
  - active left
  - inactive left
  - unmounted left
index 1
  - inactive right + 2
  - active
  - inactive left
  - unmounted left
index 2
  - inactive right
  - active
  - inactive left
  - unmounted left
index 3-(n-3)
  - unmounted right
  - inactive right
  - active
  - inactive left
  - unmounted left
index n-2
  - unmounted right
  - inactive right
  - active
  - inactive left
index n-1
  - unmounted right
  - inactive right
  - active
  - inactive left + 2
index n
  - unmounted right
  - inactive right
  - active right

0 - AL IR+2 IR UR
1 = IL A IR UR
2 = UL IL A IR UR
n-2 = UL IL A IR UR
n-1 =  UL IL A IR
n =  UL IL IL+2 AR

if (state.index-props.index=0 && props.index=0) {
  AL
}
if (state.index-props.index=1 && props.index=1) {
  IR+2
}
if (state.index-props.index=2 && props.index=2) {
  IR
}
if (state.index-props.index=2) {
  UR
}
if (state.index-props.index=0 && props.index=n) {
  AR
}
if (state.index-props.index=-1 && props.index=n-1) {
  IL+2
}
if (state.index-props.index=-2 && props.index=n-2) {
  IL
}
if (state.index-props.index=-2) {
  UL
}

Card
  props: index, listLength, activeIndex

  UL IL IL+2 AL A AR IR+2 IR UR
*/
