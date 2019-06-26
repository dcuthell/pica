import React, { Component } from 'react'
import styles from './styles.module.css'

import logo from '../../img/PicaLogo.png'
import mobileLogo from '../../img/MobileLogo.png'
import hamburger from '../../img/hamburger.png'
import cross from '../../img/cross.png'


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
      <div className={styles.PicaNavBar}>
        <div className={styles.mainMenu} style={{display: ((window.innerWidth >= 767) ? 'block' : 'none')}}>
          <a href='https://www.pica.org/'>
            <img src={logo} alt='logo' id={styles.menuLogo} />
          </a>
          <div className={styles.menuOptions}>
            <a onClick={this.closeNav} href='https://www.pica.org/basket/'><i className='fas fa-shopping-basket' /></a>
            <a onClick={this.closeNav} href='https://www.pica.org/account/'><i className='fas fa-user' /></a>
            <a href='https://www.pica.org/tba/'><p>TBA Festival</p></a>
            {/*<a href='https://www.pica.org/events'><p>Events</p></a>*/}
            <a href='https://www.pica.org/artists/'><p>Artists & Archive</p></a>
            {/*<a href='https://www.pica.org/learn'><p>Learn</p></a>*/}
            <a href='https://www.pica.org/precipice-fund/home/'><p>Precipice Fund</p></a>
            <a href='https://www.pica.org/support/'><p>Support</p></a>
          </div>
        </div>
        <div className={styles.mobileNav} style={{display: ((window.innerWidth < 767) ? 'block' : 'none')}}>
          <div className={styles.mobileBar} style={{zIndex: '2'}}>
            <a onClick={this.closeNav} href='https://www.pica.org/'>
              <img src={mobileLogo} alt='mobilelogo' id={styles.mobileLogo} />
            </a>
            <img onClick={this.toggleNav} src={this.state.isOpen ? cross : hamburger} alt='menuicon' id={styles.menuIcon} />
          </div>
          <div className={this.state.isOpen ? styles.mobileMenuOpen : styles.mobileMenu} style={{zIndex: '1'}}>
            <div className={styles.mobileMenuOptions}>
              <a onClick={this.closeNav} href='https://www.pica.org/basket/'><i className='fas fa-shopping-basket' /></a>
              <a onClick={this.closeNav} href='https://www.pica.org/account/'><i className='fas fa-user' /></a>
              <a href='https://www.pica.org/tba/'><p>TBA Festival</p></a>
              {/*<a onClick={this.closeNav} href='https://www.pica.org/events'><p>Events</p></a>*/}
              <a onClick={this.closeNav} href='https://www.pica.org/artists/'><p>Artists & Archive</p></a>
              {/*<a onClick={this.closeNav} href='https://www.pica.org/learn'><p>Learn</p></a>*/}
              <a onClick={this.closeNav} href='https://www.pica.org/precipice-fund/home/'><p>Precipice Fund</p></a>
              <a onClick={this.closeNav} href='https://www.pica.org/support/'><p>Support</p></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PicaNavBar
