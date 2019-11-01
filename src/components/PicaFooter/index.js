import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

import logo from '../../img/FooterLogo.png'

class PicaFooter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobile: false
    }
  }

  updateDimensions(e) {
    if (window.innerWidth >= 1200) {
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
      <div>
        <div>
          <div style={{display: (this.state.mobile ? 'none' : 'block')}}>
            <div className={styles.PicaFooter + ' d-flex justify-content-center'}>
              <div className={styles.FooterColumnLarge}>
                <img src={logo} alt='logo' />
                <div style={{position: 'relative', bottom: '-13%', left: '2%'}}>
                  <p style={{fontSize: '12px', lineHeight: '14px'}}>© 2019 Portland Institute for Contemporary Art</p>
                </div>
              </div>
              <div className={styles.FooterColumnLarge}>
                <p>VISIT</p>
                <p>15 NE Hancock St.</p>
                <p>Portland, OR</p>
                <p>97212</p>
              </div>
              <div className={styles.FooterColumn}>
                <p>HOURS</p>
                <p>Tuesday</p>
                <p>to Friday</p>
                <p>11am-6pm</p>
              </div>
              <div className={styles.FooterColumn}>
                <p>Contact</p>
                <a href='tel:+15032421419'><p>503-242-1419</p></a>
                <a href='mailto:pica@pica.org'><p>pica@pica.org</p></a>
              </div>
              <div className={styles.FooterColumn}>
                <p>
                  <a href='https://www.pica.org/leadership'>Leadership</a>
                </p>
                <p>
                  <a href='https://www.pica.org/jobs'>Jobs</a>
                </p>
                <p>
                  <a href='https://www.pica.org/newsletter'>Newsletter</a>
                </p>
              </div>
              <div className={styles.FooterColumn}>
                <p>
                  <a href='https://www.pica.org/press'>Press</a>
                </p>
                <NavLink to='/blog'><p>Latest</p></NavLink>
                <div className={styles.socialIcons}>
                  <a href='https://twitter.com/P_I_C_A' target='_blank' rel='noreferrer noopener'><i className='fab fa-twitter' /></a>
                  <a href='https://www.facebook.com/PICAPDX/' target='_blank' rel='noreferrer noopener'><i className='fab fa-facebook' /></a>
                  <a href='https://www.instagram.com/picapdx/' target='_blank' rel='noreferrer noopener'><i className='fab fa-instagram' /></a>
                </div>
              </div>
              <div className={styles.FooterColumn}>
                <NavLink to='/resource-room'><p>Resource Room</p></NavLink>
                <NavLink to='/merchandise'><p>Merchandise</p></NavLink>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={{display: (this.state.mobile ? 'block' : 'none'), width: '100%', maxWidth: '1000px', margin: 'auto'}}>
            <div className={styles.PicaFooterMobile + ' d-flex flex-wrap'}>
              <div style={{width: '50%'}}>
                <p>
                  <a href='https://www.pica.org/leadership'>Leadership</a>
                </p>
                <p>
                  <a href='https://www.pica.org/jobs'>Jobs</a>
                </p>
                <p>
                  <a href='https://www.pica.org/newsletter'>Newsletter</a>
                </p>
                <p>
                  <a href='https://www.pica.org/press'>Press</a>
                </p>
              </div>
              <div style={{width: '50%'}}>
                <NavLink onClick={this.closeNav} to='/blog'><p>Latest</p></NavLink>
                <NavLink onClick={this.closeNav} to='/resource-room'><p>Resource Room</p></NavLink>
                <NavLink onClick={this.closeNav} to='/merchandise'><p>Merchandise</p></NavLink>
                <NavLink onClick={this.closeNav} to='/'><p>Home</p></NavLink>
              </div>
              <hr style={{width: '90%', margin: 'auto'}} />
              <div style={{width: '50%'}}>
                <p>VISIT</p>
                <p style={{lineHeight: '1.5rem'}}>15 NE Hancock St.</p>
                <p style={{lineHeight: '1.25rem'}}>Portland, OR 97212</p>
                <p>Contact</p>
                <a style={{lineHeight: '1.5rem'}} href='tel:+15032421419'><p>503-242-1419</p></a>
                <a style={{lineHeight: '1.25rem'}} href='mailto:pica@pica.org'><p>pica@pica.org</p></a>
              </div>
              <div style={{width: '50%'}}>
                <p>HOURS</p>
                <p>Tue-Fri</p>
                <p>11am-6pm</p>
                <br />
                <div className={styles.socialIcons}>
                  <a href='https://twitter.com/P_I_C_A' target='_blank' rel='noreferrer noopener'><i className='fab fa-twitter' /></a>
                  <a href='https://www.facebook.com/PICAPDX/' target='_blank' rel='noreferrer noopener'><i className='fab fa-facebook' /></a>
                  <a href='https://www.instagram.com/picapdx/' target='_blank' rel='noreferrer noopener'><i className='fab fa-instagram' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PicaFooter
