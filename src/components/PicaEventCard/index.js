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
    this.handleStyle = this.handleStyle.bind(this)
  }

  handleClick(e) {
    if (this.props.isOpen && (this.props.activeIndex === this.props.index)) {
      this.props.setClose()
    } else {
      this.props.setOpen(this.props.index)
    }

    if (this.state.isOpen) {
      this.setState({
        isOpen: false
      })
      setTimeout(() => {
        this.setState({
          isClosed: true
        })
      }
      , 500)
    } else {
      this.setState({
        isOpen: true,
        isClosed : false
      })
    }
  }

  shouldComponentUpdate(nextProps){
    if(nextProps.isOpen && this.state.isOpen){
      if(nextProps.activeIndex === nextProps.index) {
        return false
      } else {
        this.setState({
          isOpen: false
        })
        setTimeout(() => {
          this.setState({
            isClosed: true
          })
        }
        , 500)
        return true
      }
    } else {
      return true
    }
  }

  componentDidUpdate(){
    console.log('woooo @' + this.props.index + ' ' + this.props.activeIndex)
  }

  handlePropsToState(){
    if(this.props.isOpen && this.state.isOpen){
      if(this.props.activeIndex === this.props.index) {
        this.setState({
          isOpen: true,
          isClosed: false
        })
      }
    }
  }

  handleStyle(){
    if(this.state.isOpen){
      return styles.contentOpen
    } else if (this.state.isClosed) {
      if(this.props.activeIndex > this.props.index){
        return styles.contentClosedUp
      } else {
        return styles.contentClosedDown
      }
    } else {
      if(this.props.activeIndex > this.props.index){
        return styles.contentClosingUp
      } else {
        return styles.contentClosingDown
      }
    }
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
        <div className={styles.content + ' ' + this.handleStyle()}>
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
