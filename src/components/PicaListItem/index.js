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
    this.handleStyle = this.handleStyle.bind(this)
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
  
  handleStyle(){
    if(this.state.isOpen){
      return styles.contentOpen
    } else if (this.state.isClosed) {
      if(this.props.activeIndex >= this.props.index || !this.props.cardOpen){
        return styles.contentClosedUp
      } else {
        return styles.contentClosedDown
      }
    } else {
      if(this.props.activeIndex >= this.props.index){
        return styles.contentClosingUp
      } else {
        return styles.contentClosingDown
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    if((props.cardOpen && state.isOpen) && (props.activeIndex !== props.index)){
      return {isOpen: false}
    } else {
      return null
    }
  }

  renderTags(){
    if(this.props.tags.length === 0){
      return(
        <p>Pica Event</p>
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
        <p>Tags: {tags}</p>
      )
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
    }
    return (
      <div className={styles.PicaListItem} style={{backgroundColor: this.props.background}}>
        {this.props.children}
      </div>
    )
  }
}

PicaListItem.propTypes = {
  key: PropTypes.number,
  activeIndex: PropTypes.number,
  setOpen: PropTypes.func,
  setClose: PropTypes.func,
  cardOpen: PropTypes.bool,
  section: PropTypes.bool,
  background: PropTypes.string
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

