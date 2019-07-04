import React, { Component } from 'react'
import styles from './styles.module.css'

class TBASelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open : false,
      selection: 'none'
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
          {this.state.open ? <p>Options &#x2191;</p> : <p>Options &#x2193;</p>}
        </div>
        <div className={styles.options + ' ' + (this.state.open ? styles.open : '')} >
          <p onClick={()=>(this.handleClick('Performance'))}>Performance</p>
          <p onClick={()=>(this.handleClick('TBA'))}>Option 2</p>
          <p onClick={()=>(this.handleClick('TBA'))}>Option 3</p>
          <p onClick={()=>(this.handleClick('TBA'))}>Option 4</p>
        </div>
      </div>
    )
  }
}
 export default TBASelector