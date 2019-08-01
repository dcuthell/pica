import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaCarouselCard from '../PicaCarouselCard'

import leftArrow from '../../img/LeftArrow.png'
import rightArrow from '../../img/RightArrow.png'

class PicaCarousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: {},
      activeIndex: 0,
      cardTotal: 9,
      swipe: 'none'
    }
    this.clickLeft = this.clickLeft.bind(this)
    this.clickRight = this.clickRight.bind(this)
    this.addStateToProps = this.addStateToProps.bind(this)
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

  componentWillMount() {
    this.setState({
      cardTotal: this.props.children.length
    })
  }

  addStateToProps(child) {
    return React.cloneElement(child, { ...child.props, activeIndex: this.state.activeIndex, cardTotal: this.state.cardTotal })
  }

  render() {
    const GET_CONTENT = gql`
      query {
        heroSlides (orderBy: sortNumber_ASC){
          title
          date
          image {
            handle
            photoCredit
          }
          buttonText
          buttonLink
          description
        }
      }
    `

    console.log('ActiveIndex: ' + this.state.activeIndex)
    const { children } = this.props
    const childrenWithProps = React.Children.map(children, child =>
      this.addStateToProps(child)
    )
    return (
      <div className={styles.PicaCarousel}
        onTouchStart={touchStartEvent => this.handleTouchStart(touchStartEvent)}
        onTouchEnd={touchEndEvent => this.handleTouchEnd(touchEndEvent)}
      >
        <div className={styles.header}>
          <div className={styles.title}>
            <h1>Events</h1>
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
        <Query query={GET_CONTENT} variables={{"tagName" : this.state.tagName}}>
          {({ loading, error, data }) => {
            if (loading) return (
              <div>
                <PicaCarouselCard index={0} title={'Loading...'} date={'Loading...'} buttonText={'Loading...'} description={'Loading...'}/>
                <PicaCarouselCard index={1}/>
                <PicaCarouselCard index={2}/>
              </div>
            )
            if (error) return `Error! ${error.message}`
            let heroSlides = data.heroSlides.map((heroSlide, index) =>
              <PicaCarouselCard
                index={index}
                activeIndex={this.state.activeIndex}
                cardTotal={this.state.cardTotal}
                key={index}
                title={heroSlide.title}
                date={heroSlide.date}
                image={'https://media.graphcms.com/' + heroSlide.image.handle}
                buttonText={heroSlide.buttonText}
                buttonLink={heroSlide.buttonLink}
                description={heroSlide.description}
              />
            )
            return (
              heroSlides
            )
          }}
        </Query>
      </div>
    )
  }
}

PicaCarousel.propTypes = {
  leftArrow: PropTypes.string,
  rightArrow: PropTypes.string,
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
