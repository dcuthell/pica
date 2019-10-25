import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import PicaButton from '../PicaButton'

class PicaArtistBlock extends Component {
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
      <div className={styles.PicaArtistBlock} style={{backgroundColor: this.props.background}}>
        <div className={((this.props.activeIndex === this.props.index && this.props.cardOpen) ? styles.headerActive : styles.header) + ' ' + (((this.props.activeIndex >= this.props.index || !this.props.cardOpen)) ? styles.headerUp : styles.headerDown)}>
          <h3>{this.props.name}</h3>
          <p>{this.props.events.length + ' Events'}</p>
          <div className={styles.button} onClick={this.handleClick}>
            {this.state.isOpen ? <p>&circ;</p> : <p>&#711;</p>}
          </div>
        </div>
        <div className={styles.content + ' ' + this.handleStyle()}>
          <div className={styles.cardImage} style={{backgroundImage: 'url(' + this.props.image + ')'}} />
          <div className={styles.cardContent} >
            <div style={{height: '90%', overflow: 'hidden'}} className={styles.details} dangerouslySetInnerHTML={{ __html: this.props.description }} />
            <PicaButton styles={{height: '10%'}}>
              <Link to={'/artists/' + this.props.route}>Learn More</Link>
            </PicaButton>
          </div>
        </div>
      </div>
    )
  }
}

PicaArtistBlock.propTypes = {
  name: PropTypes.string,
  events: PropTypes.array,
  description: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  setOpen: PropTypes.func,
  setClose: PropTypes.func,
  cardOpen: PropTypes.bool,
  section: PropTypes.bool
}

PicaArtistBlock.defaultProps = {
  name: 'Mike Jones',
  events: ['Tons'],
  description: '<h1>None needed</h1>',
  image: 'https://thesource.com/wp-content/uploads/2018/07/1024x1024.jpg',
  route: 'no-route'
}

export default PicaArtistBlock
