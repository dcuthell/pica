import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

class PicaPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col xl='12'>
                        <h4>{this.props.date + ' | ' + this.props.tags}</h4>  
                    </Col>
                    <Col xl='12'>
                        <h1>{this.props.title}</h1>
                    </Col>
                    <Col xl='12'>
                        <div dangerouslySetInnerHTML={{ __html: this.props.body }} />
                    </Col>
                </Row>
            </Container>
        )
    }

}

PicaPost.defaultProps = {
    title: 'Sample Title',
    date: 'September 9th 2019',
    tags: 'TBA',
    author: 'Michael Jones',
    body: '<h1>SWEEEET DOG</h1>',
    image: 'https://i.imgur.com/ArRiBMs.png'
    
  }
  
  PicaPost.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    tags: PropTypes.string,
    author: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string
  }

  export default PicaPost