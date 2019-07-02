import React, { Component } from 'react'
import styles from './styles.module.css'

class TBASelector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open : false,
      selection: 'none'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    return(
      <div className={styles.TBASelector}>
        <div className={styles.header} onClick={this.handleClick}>
          {this.state.open ? <p>Options &#x2191;</p> : <p>Options &#x2193;</p>}
        </div>
        <div className={styles.options + ' ' + (this.state.open ? styles.open : '')} >
          <hr />
          <p>Option 1</p>
          <hr />
          <p>Option 2</p>
          <hr />
          <p>Option 3</p>
          <hr />
          <p>Option 4</p>
        </div>
      </div>
    )
  }
}
 export default TBASelector