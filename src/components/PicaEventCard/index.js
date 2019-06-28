import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

class PicaEventCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isClosed: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (this.props.isOpen && (this.props.activeIndex === this.props.index)) {
      this.props.setClose()
    } else {
      this.props.setOpen(this.props.index)
    }

    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    console.log(this.props.isOpen)
    if (this.props.blocker) {
      return (
        <div className={styles.header + ' ' + (((this.props.activeIndex >= this.props.index) || !this.props.isOpen) ? styles.headerUp : styles.headerDown)} style={{backgroundColor: 'black', height: '40vh', position: 'relative'}} />
      )
    }
    return (
      <div className={styles.PicaEventCard}
        style={{backgroundColor: this.props.background}}
        onClick={this.handleClick}>
        <div className={styles.header + ' ' + (((this.props.activeIndex >= this.props.index) || !this.props.isOpen) ? styles.headerUp : styles.headerDown)}>
          <h1>{this.props.title}</h1>
        </div>
        <div className={styles.content + ' ' + ((this.props.isOpen && (this.props.activeIndex === this.props.index)) ? styles.contentOpen : ((this.props.activeIndex > this.props.index) ? (styles.contentClosedUp) : (styles.contentClosedDown)))}>
          <div className={styles.cardImage} >
            <h1>CONTENT</h1>
          </div>
          <div className={styles.cardContent} >
            <p>
              This is a short description about what the event is. This should be PICA's voice and description of the event, a quick takeaway for the user to understand...
            </p>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

PicaEventCard.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  background: PropTypes.string,
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  cardTotal: PropTypes.number,
  setOpen: PropTypes.func,
  setClose: PropTypes.func,
  isOpen: PropTypes.bool,
  blocker: PropTypes.bool
}

export default PicaEventCard
