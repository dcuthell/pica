import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Route } from 'react-router-dom'

import PicaCarouselCard from '../PicaCarouselCard'

import leftArrow from '../../img/LeftArrow.png'
import rightArrow from '../../img/RightArrow.png'

class PicaCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: {},
      activeIndex: 0,
      swipe: 'none'
    }
    this.clickLeft = this.clickLeft.bind(this)
    this.clickRight = this.clickRight.bind(this)
    this.renderCards = this.renderCards.bind(this)
  }
  
  static getDerivedStateFromProps(props, state) {
    if(props.heroSlideData){
      return {cardTotal: props.heroSlideData.length}
    } else {
      return null
    }
  }

  handleTouchStart(e) {
    const oldX = e.changedTouches[0].clientX
    this.setState({
      oldX: oldX
    })
  }

  handleTouchEnd(e) {
    const newX = e.changedTouches[0].clientX
    this.setState({
      newX: newX
    }, () => this.setSwipe())
  }

  clickLeft(e) {
    const newIndex = ((this.state.activeIndex === 0) ? this.state.activeIndex : (this.state.activeIndex - 1))
    this.setState({
      activeIndex: newIndex,
      swipe: 'left'
    })
  }

  clickRight(e) {
    const newIndex = ((this.state.activeIndex === (this.state.cardTotal - 1)) ? this.state.activeIndex : (this.state.activeIndex + 1))
    this.setState({
      activeIndex: newIndex,
      swipe: 'right'
    })
  }

  setSwipe() {
    if (this.state.oldX > this.state.newX) {
      const newIndex = ((this.state.activeIndex === (this.state.cardTotal - 1)) ? this.state.activeIndex : (this.state.activeIndex + 1))
      if ((this.state.oldX - this.state.newX) > 100) {
        this.setState({
          activeIndex: newIndex,
          swipe: 'left'
        })
      }
    }
    if (this.state.oldX < this.state.newX) {
      const newIndex = ((this.state.activeIndex === 0) ? this.state.activeIndex : (this.state.activeIndex - 1))
      if ((this.state.newX - this.state.oldX) > 100) {
        this.setState({
          activeIndex: newIndex,
          swipe: 'right'
        })
      }
    }
  }

  setBackgroundColor(index){
    const i = index % 6
    if(i === 0){
      return '#B0C170'
    }
    if(i === 1){
      return '#0DAE5D'
    }
    if(i === 2){
      return '#8EA9D5'
    }
    if(i === 3){
      return '#FFC2EB'
    }
    if(i === 4){
      return '#FF5928'
    }
    if(i === 5){
      return '#8A69D4'
    }
  }

  handleTags(heroSlide){
    if((heroSlide.tags.length === 0) && heroSlide.program){
      return heroSlide.program.tags
    } else {
      return heroSlide.tags
    }
  }

  renderCards(){
    if(this.props.loading){
      return(
        <div>
          <PicaCarouselCard index={0} title={'Loading...'} date={'Loading...'} buttonText={'Loading...'} description={'Loading...'}/>
          <PicaCarouselCard index={1}/>
          <PicaCarouselCard index={2}/>
        </div>
      )
    }
    if(this.props.error){
      return(
        <div>
        <PicaCarouselCard index={0} title={'Uh oh...'} date={'It appears something has gone wrong...'} buttonText={'Error'} description={'Please check your connection'}/>
        <PicaCarouselCard index={1} title={'Uh oh...'} date={'It appears something has gone wrong...'} buttonText={'Error'} description={'Please check your connection'}/>
        <PicaCarouselCard index={2} title={'Uh oh...'} date={'It appears something has gone wrong...'} buttonText={'Error'} description={'Please check your connection'}/>
      </div>
      )
    }
    let heroSlides = this.props.heroSlideData.map((heroSlide, index) =>
      <PicaCarouselCard
        index={index}
        activeIndex={this.state.activeIndex}
        cardTotal={this.state.cardTotal}
        key={index}
        title={heroSlide.title ? heroSlide.title : heroSlide.program.title}
        date={heroSlide.date  ? heroSlide.date : heroSlide.program.dateAndTime[0]}
        image={'https://media.graphcms.com/resize=width:800/' + (heroSlide.image ? heroSlide.image.handle : heroSlide.program.gallery.galleryItems[0].media.handle)}
        buttonText={heroSlide.buttonText ? heroSlide.buttonText : 'GO TO EVENT'}
        buttonLink={heroSlide.buttonLink ? heroSlide.buttonLink : '/events/' + heroSlide.program.route}
        description={heroSlide.description ? heroSlide.description : heroSlide.program.shortDescription}
        tags={this.handleTags(heroSlide)}
        background={this.setBackgroundColor(index)}
      />
    )
    return (
      heroSlides
    )
  }

  render() {
    return (
      <div className={styles.PicaCarousel}
        onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
        onTouchEnd={touchEndEvent => this.handleTouchEnd(touchEndEvent)}
      >
        <Route path={'/' + this.state.swipe} component={PicaCarouselCard} />
        <div className={styles.header}>
          <div className={styles.title}>
            <h1 style={{fontSize: '4rem'}}>UPCOMING EVENTS</h1>
          </div>
          <div
            className={styles.arrows}
            id={styles.leftArrow}
            style={{backgroundImage: 'url(' + leftArrow + ')'}}
            onClick={this.clickLeft}
          />
          <div
            className={styles.arrows}
            id={styles.rightArrow}
            style={{backgroundImage: 'url(' + rightArrow + ')'}}
            onClick={this.clickRight}
          />
        </div>
        {this.renderCards()}
      </div>
    )
  }
}

PicaCarousel.propTypes = {
  leftArrow: PropTypes.string,
  rightArrow: PropTypes.string,
  heroSlideData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default PicaCarousel

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
