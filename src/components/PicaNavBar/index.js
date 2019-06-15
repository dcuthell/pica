import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Container, Button, Row, Col } from 'reactstrap'
import styles from './styles.module.css'

import logo from '../../img/PicaLogo.png'
import mobileLogo from '../../img/MobileLogo.png'


class PicaNavBar extends Component {
  constructor(props) {
    super(props)
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.openNav = this.openNav.bind(this)
    this.state = {
      isOpen: false,
      mobile: false
    }
  }

  toggleNav() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  openNav() {
    this.setState({
      isOpen: true
    })
  }

  closeNav() {
    this.setState({
      isOpen: false
    })
  }

  updateDimensions(e) {
    if (window.innerWidth > 767) {
      if (this.state.mobile) {
        this.setState({
          mobile: false
        })
      }
    } else {
      if (!this.state.mobile) {
        this.setState({
          mobile: true
        })
      }
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  render() {
    return (
      <div className={styles.PicaNavBarr}>
        <div className={styles.mainMenu} style={{display: ((window.innerWidth >= 767) ? 'block' : 'none')}}>
          <NavLink to='/'>
            <img src={logo} alt='logo' id={styles.menuLogo} />
          </NavLink>
          <div className={styles.menuOptions}>
            <NavLink onClick={this.closeNav} to='/cart'><i className='fas fa-shopping-basket' /></NavLink>
            <NavLink onClick={this.closeNav} to='/account'><i className='fas fa-user' /></NavLink>
            <NavLink to='/events'><p>Events</p></NavLink>
            <NavLink to='/artistsandarchive'><p>Artists & Archive</p></NavLink>
            <NavLink to='/learn'><p>Learn</p></NavLink>
            <NavLink to='/precipicefund'><p>Precipice Fund</p></NavLink>
            <NavLink to='/support'><p>Support</p></NavLink>
          </div>
        </div>
        <div className={styles.mobileNav} style={{display: ((window.innerWidth < 767) ? 'block' : 'none')}}>
          <div className={styles.mobileBar} style={{zIndex: '2'}}>
            <NavLink onClick={this.closeNav} to='/'>
              <img src={mobileLogo} alt='mobilelogo' id={styles.mobileLogo} />
            </NavLink>
            <img onClick={this.toggleNav} src={this.state.isOpen ? this.props.cross : this.props.hamburger} alt='menuicon' id={styles.menuIcon} />
          </div>
          <div className={this.state.isOpen ? styles.mobileMenuOpen : styles.mobileMenu} style={{zIndex: '1'}}>
            <div className={styles.mobileMenuOptions}>
              <NavLink onClick={this.closeNav} to='/events'><p>Events</p></NavLink>
              <NavLink onClick={this.closeNav} to='/artistsandarchive'><p>Artists & Archive</p></NavLink>
              <NavLink onClick={this.closeNav} to='/learn'><p>Learn</p></NavLink>
              <NavLink onClick={this.closeNav} to='/precipicefund'><p>Precipice Fund</p></NavLink>
              <NavLink onClick={this.closeNav} to='/support'><p>Support</p></NavLink>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

PicaNavBar.defaultProps = {
  logo: '',
  mobileLogo: '',
  hamburger: '',
  cross: ''
}

PicaNavBar.propTypes = {
  logo: PropTypes.string,
  mobileLogo: PropTypes.string,
  hamburger: PropTypes.string,
  cross: PropTypes.string
}

export default PicaNavBar
