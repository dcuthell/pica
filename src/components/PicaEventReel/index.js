import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Route } from 'react-router-dom'

import PicaEventReelBlock from '../PicaEventReelBlock'

import leftArrow from '../../img/LeftArrow.png'
import rightArrow from '../../img/RightArrow.png'

class PicaEventReel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: {},
      activeIndex: 0,
      swipe: 'none',
      mobile: (window.innerWidth > 767) ? false : true
    }
    this.clickLeft = this.clickLeft.bind(this)
    this.clickRight = this.clickRight.bind(this)
    this.renderCards = this.renderCards.bind(this)
  }
  
  static getDerivedStateFromProps(props, state) {
    if(props.postData){
      return {cardTotal: props.postData.length}
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
    let newIndex = 0
    if(this.state.mobile){
      newIndex = ((this.state.activeIndex === (this.state.cardTotal - 1)) ? this.state.activeIndex : (this.state.activeIndex + 1))
    } else {
      newIndex = ((this.state.activeIndex === (this.state.cardTotal - 3)) ? this.state.activeIndex : (this.state.activeIndex + 1))
    }
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

  renderCards(){
    if(this.props.loading){
      return(
        <div>
          <PicaEventReelBlock index={0} title={'Loading...'} date={'Loading...'} buttonText={'Loading...'} description={'Loading...'}/>
          <PicaEventReelBlock index={1}/>
          <PicaEventReelBlock index={2}/>
        </div>
      )
    }
    if(this.props.error){
      return(
        <div>
        <PicaEventReelBlock index={0} title={'Uh oh...'} date={'It appears something has gone wrong...'} buttonText={'Error'} description={'Please check your connection'}/>
        <PicaEventReelBlock index={1} title={'Uh oh...'} date={'It appears something has gone wrong...'} buttonText={'Error'} description={'Please check your connection'}/>
        <PicaEventReelBlock index={2} title={'Uh oh...'} date={'It appears something has gone wrong...'} buttonText={'Error'} description={'Please check your connection'}/>
      </div>
      )
    }
    let posts = this.props.postData.map((post, index) => 
      <PicaEventReelBlock
        index={index}
        activeIndex={this.state.activeIndex}
        cardTotal={this.state.cardTotal}
        key={index}
        title={post.title}
        date={post.date}
        image={'https://media.graphcms.com/resize=width:800/' + (post.image.handle)}
        route={post.route}
        description={post.body.html}
      />
    )
    return (
      posts
    )
  }

  render() {
    return (
      <div className={styles.PicaEventReel}
        onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
        onTouchEnd={touchEndEvent => this.handleTouchEnd(touchEndEvent)}
      >
        <Route path={'/' + this.state.swipe} component={PicaEventReelBlock} />
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>NEWS</h1>
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
        <div className={styles.reel}>
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

PicaEventReel.propTypes = {
  leftArrow: PropTypes.string,
  rightArrow: PropTypes.string,
  postData: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default PicaEventReel

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
