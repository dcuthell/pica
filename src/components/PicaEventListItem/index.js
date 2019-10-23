import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import PicaButton from '../PicaButton'

class PicaEventListItem extends Component {
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
            <Link to={'events?tag=' + this.props.tags[i].name}>{this.props.tags[i].name}</Link>
          )
        } else {
          tags.push(
            <Link to={'events?tag=' + this.props.tags[i].name}>{this.props.tags[i].name}</Link>
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
      <div className={styles.PicaEventListItem} style={{backgroundColor: this.props.background}}>
        <div className={styles.header + ' ' + (((this.props.activeIndex >= this.props.index || !this.props.cardOpen)) ? styles.headerUp : styles.headerDown)}>
          <h1>{this.props.title}</h1>
          <h3>{this.props.artist}</h3>
          <p>{this.props.time}</p>
          <div className={styles.button} onClick={this.handleClick}>
            {this.state.isOpen ? <p>&circ;</p> : <p>&#711;</p>}
          </div>
        </div>
        <div className={styles.content + ' ' + this.handleStyle()}>
          <div className={styles.cardImage} style={{backgroundImage: 'url(' + this.props.image + ')'}} >
          
          </div>
          <div className={styles.cardContent} >
            <div style={{height: '60%', overflow: 'hidden'}}>
              <p>{this.props.description}</p>
            </div>
            <div style={{height: '20%', overflow: 'hidden'}}>
              {this.renderTags()}
            </div>
            <div style={{height: '20%', overflow: 'hidden'}}>
              <PicaButton>
                <Link to={'/events/' + this.props.route}>BUY TICKETS</Link>
              </PicaButton>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PicaEventListItem.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  background: PropTypes.string,
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  cardTotal: PropTypes.number,
  setOpen: PropTypes.func,
  setClose: PropTypes.func,
  cardOpen: PropTypes.bool,
  section: PropTypes.bool
}

PicaEventListItem.defaultProps = {
  tags: []
}

export default PicaEventListItem
