import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'
import styles from './styles.module.css'
import PicaButton from '../PicaButton'

class TBATextReveal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <Row style={{marginTop: '12px'}}>
        <Col xl='5' />
        <Col xl='5' style={{textAlign: 'center'}}>
          <PicaButton >
            <h4 onClick={this.handleClick} style={{margin: '12px 12px 12px 12px'}}>FAQS</h4>
          </PicaButton>
        </Col>
        <Col xl='2' />
        <Col xl='1' />
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>WHERE IS THE BOX OFFICE?</h4>
          <p>The TBA Box Office is located at PICA in Northeast Portland at 15 NE Hancock. </p>
        </Col>
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>IS THERE A SERVICE CHARGE ON TICKETS AND PASSES?</h4>
          <p>A $3 transaction fee applies to all orders whether processed online by phone, or in-person. All payment methods, credit card, cash, and checks are subject to this fee</p>
        </Col>
        <Col xl='1' />
        <Col xl='1' />
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>CAN I SHARE MY PASS?</h4>
          <p>No. Passes are non-transferable. Your name will be marked on your pass and you will be required to show ID with your pass at each venue.</p>
        </Col>
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>WHAT IF I FORGET MY PASS?</h4>
          <p>You must purchase a ticket at the door.</p>
        </Col>
        <Col xl='1' />
        <Col xl='1' />
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>WHAT IF I LOSE MY PASS?</h4>
          <p>Contact the Box Office immediately and we will help reissue a new pass.</p>
        </Col>
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>WHAT IF I ARRIVE LATE FOR A SHOW?</h4>
          <p>As a general rule, there is no late seating. All shows begin promptly as listed. You must check in no later than 15 minutes before curtain to ensure seating, even with a pass reservation or pre-purchased individual ticket. At 15 minutes prior to curtain, any unclaimed seats will be opened up for individual ticket sales at the door. </p>
        </Col>
        <Col xl='1' />
        <Col xl='1' />
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>IF I BUY A TICKET, DOES MY CHILD GET IN FOR FREE?</h4>
          <p>Yes, your child may attend for free if they can sit on your lap. Otherwise, you will need to purchase an additional ticket. Please note, while we welcome children and babies, we may have to ask you to wait in the lobby if there is any disturbance to the live performance.</p>
        </Col>
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>WHICH SHOWS ARE APPROPRIATE FOR CHILDREN? CAN I BRING MY FAMILY?</h4>
          <p>PICA supports freedom of speech for artists and the audiences’ right to choose what to see and hear. Due to the nature of live performance, we cannot prescreen all works for content. However, if you have specific concerns or questions, our Box Office staff can offer suggestions on shows. Young people are welcome at all shows that are not 21+ at their parents’ discretion.</p>
        </Col>
        <Col xl='1' />
        <Col xl='1' />
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>CAN YOU REFUND OR EXCHANGE MY TICKET?</h4>
          <p>All ticket and pass sales are final. There are no refunds or exchanges.</p>
        </Col>
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>DO I HAVE TO MAKE A RESERVATION IF I HAVE A PASS?</h4>
          <p>Yes, reservations are required for most performances at every pass level. You will make your reservations when purchasing your pass. Some performances are housed in limited-capacity venues. To ensure the best experience possible, reservations help us better anticipate audiences for each performance. For more information, visit pica.org or contact the Box Office.</p>
        </Col>
        <Col xl='1' />
        <Col xl='1' />
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
          <h4>ARE EVENTS ADA ACCESSIBLE?</h4>
          <p>All TBA:19 festival sites are accessible to people with mobility aids. If you have questions about the accessibility of a specific venue/location, including questions about parking, please contact the Box Office for information at  503-224-PICA (7422).</p>
        </Col>
        <Col xl='5' className={this.state.open ? styles.open : styles.closed}>
        </Col>
        <Col xl='1' />
      </Row>
    )
  }
}


export default TBATextReveal
