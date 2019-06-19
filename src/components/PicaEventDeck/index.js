import React, { Component } from 'react'
import styles from './styles.module.css'

// import PicaEventCard from '../PicaEventCard'

class PicaEventDeck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 6,
      cardTotal: 6,
      isOpen: false
    }
    this.setOpen = this.setOpen.bind(this)
    this.setClose = this.setClose.bind(this)
    this.addClicksToProps = this.addClicksToProps.bind(this)
  }

  setOpen(index) {
    this.setState({
      isOpen: true
    })
    this.setState({
      activeIndex: index
    })
  }
  setClose() {
    this.setState({
      isOpen: false
    })
    this.setState({
      activeIndex: this.state.cardTotal
    })
  }

  componentWillMount() {
    this.setState({
      activeIndex: this.props.children.length,
      cardTotal: this.props.children.length
    })
  }

  addClicksToProps(child) {
    return React.cloneElement(child, { ...child.props, setOpen: this.setOpen, setClose: this.setClose, activeIndex: this.state.activeIndex, cardTotal: this.state.cardTotal, isOpen: this.state.isOpen })
  }

  render() {
    const { children } = this.props
    const childrenWithProps = React.Children.map(children, child =>
      this.addClicksToProps(child)
    )
    console.log(this.props.children.length)
    return (
      <div className={styles.PicaEventDeck}>
        {childrenWithProps}
      </div>
    )
  }
}

export default PicaEventDeck
