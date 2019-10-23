import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import PicaButton from '../PicaButton'

class PicaPrecipiceListItem extends Component {
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

  renderGrantees(){
    if(this.props.grantees.length === 0){
      return(
        <h2>No Grantees</h2>
      )
    }
    let col1 = []
    let col2 = []
    this.props.grantees.forEach((grantee, index) => {
      if(index % 2 === 0){
        col1.push(
          <Link to={'/artists/' + grantee.route}>{grantee.name}</Link>
        )
        col1.push(
          <br />
        )
      } else {
        col2.push(
          <Link to={'/artists/' + grantee.route}>{grantee.name}</Link>
        )
        col2.push(
          <br />
        )
      }
    })
    return(
      <Container>
        <Row>
          <Col md='6'>
            {col1}
          </Col>
          <Col md='6'>
            {col2}
          </Col>
        </Row>
      </Container>
    )
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
      <div className={styles.PicaPrecipiceListItem} style={{backgroundColor: this.props.background}}>
        <div className={styles.header + ' ' + (((this.props.activeIndex >= this.props.index || !this.props.cardOpen)) ? styles.headerUp : styles.headerDown)}>
          <h3>{this.props.year}</h3>
          <p>{this.props.number}</p>
          <div className={styles.button} onClick={this.handleClick}>
            {this.state.isOpen ? <p>&circ;</p> : <p>&#711;</p>}
          </div>
        </div>
        <div className={styles.content + ' ' + this.handleStyle()}>
          <div className={styles.cardImage}>
            <h1>GRANTEES</h1>
            {this.renderGrantees()}
          </div>
          <div className={styles.cardContent} >
           <div dangerouslySetInnerHTML={{ __html: this.props.details }} />
          </div>
        </div>
      </div>
    )
  }
}

PicaPrecipiceListItem.propTypes = {
  year: PropTypes.string,
  number: PropTypes.string,
  grantees: PropTypes.array,
  body: PropTypes.string,
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  setOpen: PropTypes.func,
  setClose: PropTypes.func,
  cardOpen: PropTypes.bool,
  section: PropTypes.bool
}

PicaPrecipiceListItem.defaultProps = {
  tags: []
}

export default PicaPrecipiceListItem
