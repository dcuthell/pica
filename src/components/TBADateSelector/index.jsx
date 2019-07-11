import React, { Component } from 'react'
import styles from './styles.module.css'

class TBADateSelector extends Component {
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
    this.props.setDate(value)
  }

  render(){
    return(
      <div className={styles.TBADateSelector}>
        <div className={styles.header} onClick={this.toggleMenu}>
          {this.state.open ? <p>Dates &#x2191;</p> : <p>Dates &#x2193;</p>}
        </div>
        <div className={styles.options + ' ' + (this.state.open ? styles.open : '')} >
          <p onClick={()=>(this.handleClick('2019-09-05T'))}>September 5</p>
          <p onClick={()=>(this.handleClick('2019-09-06T'))}>September 6</p>
          <p onClick={()=>(this.handleClick('2019-09-07T'))}>September 7</p>
          <p onClick={()=>(this.handleClick('2019-09-08T'))}>September 8</p>
          <p onClick={()=>(this.handleClick('2019-09-09T'))}>September 9</p>
          <p onClick={()=>(this.handleClick('2019-09-10T'))}>September 10</p>
          <p onClick={()=>(this.handleClick('2019-09-11T'))}>September 11</p>
          <p onClick={()=>(this.handleClick('2019-09-12T'))}>September 12</p>
          <p onClick={()=>(this.handleClick('2019-09-13T'))}>September 13</p>
          <p onClick={()=>(this.handleClick('2019-09-14T'))}>September 14</p>
          <p onClick={()=>(this.handleClick('2019-09-15T'))}>September 15</p>
        </div>
      </div>
    )
  }
}
 export default TBADateSelector
