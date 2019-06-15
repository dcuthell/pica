import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Container, Button, Row, Col } from 'reactstrap'
import styles from './styles.module.css'

class PicaFooter extends Component {
  render() {
    return (
      <div className={styles.PicaFooter + ' d-flex justify-content-center'}>
        <div className={styles.FooterColumnLarge}>
          <img src={this.props.logo} alt='logo' />
          <div style={{position: 'absolute', bottom: '30%', left: '0'}}>
            <p style={{fontSize: '12px', paddingLeft: '24px'}}>© 2019 Portland Institute</p>
            <p style={{fontSize: '12px', paddingLeft: '42px'}}>of Contemporary Arts</p>
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
          <p>Wednesday</p>
          <p>to Friday</p>
          <p>12pm-6pm</p>
        </div>
        <div className={styles.FooterColumn}>
          <p>Contact</p>
          <a href='tel:+15032421419'><p>503-242-1419</p></a>
          <a href='mailto:pica@pica.org'><p>pica@pica.org</p></a>
          <div className='d-flex justify-content-between'>
            <a href='https://www.linkedin.com/company/grailsoft-technologies-llc/' target='_blank' rel='noreferrer noopener'><i className='fab fa-twitter' /></a>
            <a href='https://github.com/GrailsoftTechnologies' target='_blank' rel='noreferrer noopener'><i className='fab fa-facebook' /></a>
            <a href='https://twitter.com/GrailsoftTech' target='_blank' rel='noreferrer noopener'><i className='fab fa-instagram' /></a>
          </div>
        </div>
        <div className={styles.FooterColumn}>
          <p>
            <NavLink to='/leadership'>Leadership</NavLink>
          </p>
          <p>
            <NavLink to='/jobs'>Jobs</NavLink>
          </p>
          <p>
            <NavLink to='/newsletter'>Newsletter</NavLink>
          </p>
        </div>
        <div className={styles.FooterColumn}>
          <p>
            <NavLink to='/press'>Press</NavLink>
          </p>
          <p>
            <NavLink to='/latest'>Latest</NavLink>
          </p>
        </div>
        <div className={styles.FooterColumn}>
          <p>
            <NavLink to='/resource-room'>Resource Room</NavLink>
          </p>
          <p>
            <NavLink to='/merchandise'>Merchandise</NavLink>
          </p>
        </div>
      </div>
    )
  }
}

PicaFooter.defaultProps = {
  logo: '',
  mobileLogo: '',
  hamburger: '',
  cross: ''
}

PicaFooter.propTypes = {
  logo: PropTypes.string,
  mobileLogo: PropTypes.string,
  hamburger: PropTypes.string,
  cross: PropTypes.string
}

export default PicaFooter
