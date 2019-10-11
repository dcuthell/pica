import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import styles from './styles.module.css'

import PicaArtistQuery from '../PicaArtistQuery'

class PicaArtistArchive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      searchTerm: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event){
    this.setState({searchInput: event.target.value})
  }

  handleSubmit(event){
    this.setState({searchTerm: this.state.searchInput})
    event.preventDefault()
  }

  render() {
    return (
      <Container className='PicaArtistArchive' style={{padding: '0', margin: '0px', maxWidth: '100%', height: '100vh'}}>
        <Row style={{margin: '0', height: '100%'}}>
          <Col className='Navigation' md='3' style={{backgroundColor: 'darkgrey'}}>
            <p>Enter an artist name</p>
            <form onSubmit={this.handleSubmit}>
              <input type='text' onChange={this.handleInput}></input>
            </form>
          </Col>
          <Col className='Results' md='9'>
            <h1>Search Results</h1>
            <PicaArtistQuery searchTerm={this.state.searchTerm} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PicaArtistArchive
