import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import PicaButton from '../PicaButton'

class PicaListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isClosed: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    if (this.props.cardOpen && (this.props.activeIndex === this.props.index)) {
      this.props.setClose(this.props.index)
      this.setState({
        isOpen: false
      })
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

  static getDerivedStateFromProps(props, state) {
    if((props.cardOpen && state.isOpen) && (props.activeIndex !== props.index)){
      return {isOpen: false}
    } else {
      return null
    }
  }

  render() {
    if (this.props.section) {
      return (
        <div className={styles.section + ' ' + ((this.props.activeIndex >= this.props.index || !this.props.cardOpen) ? styles.sectionUp : styles.sectionDown)}
        style={{backgroundColor: this.props.background}}>
          {this.props.children}
        </div>
      )
    } else {
      return (
        <div className={styles.PicaEventListItem} style={{backgroundColor: this.props.background}}>
          <div className={styles.header + ' ' + (((this.props.activeIndex >= this.props.index || !this.props.cardOpen)) ? styles.headerUp : styles.headerDown)}>
            <div className={styles.headerText}>
              {this.props.header}
            </div>
            {this.props.header}
            <div className={styles.button} onClick={this.handleClick}>
              {this.state.isOpen ? <p>&circ;</p> : <p>&#711;</p>}
            </div>
          </div>
          <div className={styles.content + ' ' + this.handleStyle()}>
            {this.props.content}
          </div>
        </div>
      )
    }
    
  }
}

PicaListItem.propTypes = {
  key: PropTypes.number,
  activeIndex: PropTypes.number,
  setOpen: PropTypes.func,
  setClose: PropTypes.func,
  cardOpen: PropTypes.bool,
  section: PropTypes.bool,
  background: PropTypes.string,
  header: PropTypes.node,
  content: PropTypes.node
}

PicaListItem.defaultProps = {
  key: 0,
  activeIndex: 0,
  setOpen: () => {},
  setClose: () => {},
  cardOpen: false,
  section: false,
  background: 'lightgray'
}

export default PicaListItem

