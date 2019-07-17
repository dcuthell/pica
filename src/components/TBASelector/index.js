import React, { Component } from 'react'
import styles from './styles.module.css'

class TBASelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open : false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  toggleMenu(){
    this.setState({
      open: !this.state.open
    })
  }

  handleClick(value){
    this.toggleMenu()
    this.props.setTagName(value)
  }

  render(){
    return(
      <div className={styles.TBASelector}>
        <div className={styles.header} onClick={this.toggleMenu}>
          {this.state.open ? <p>{(this.props.tagName !== 'TBA' ? this.props.tagName : 'All Events')} &#x2191;</p> : <p>{(this.props.tagName !== 'TBA' ? this.props.tagName : 'All Events')} &#x2193;</p>}
        </div>
        <div className={styles.options + ' ' + (this.state.open ? styles.open : '')} >
          <p onClick={()=>(this.handleClick('TBA'))}>All Events</p>
          <p onClick={()=>(this.handleClick('Performance'))}>Performance</p>
          <p onClick={()=>(this.handleClick('Late Night'))}>Late Night</p>
          <p onClick={()=>(this.handleClick('Institute'))}>Institute</p>
          <p onClick={()=>(this.handleClick('Partner Projects'))}>Partner Projects</p>
          <p onClick={()=>(this.handleClick('Food'))}>Food</p>
        </div>
      </div>
    )
  }
}
 export default TBASelector
