import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import styles from './styles.module.css'

import PicaArtistQuery from '../PicaArtistQuery'

class PicaBlogList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      searchTerm: '',
      searchType: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleLetterClick = this.handleLetterClick.bind(this)
    this.handleTagClick = this.handleTagClick.bind(this)
  }

  handleInput(event){
    this.setState({searchInput: event.target.value})
  }

  handleSubmit(event){
    this.setState({
      searchTerm: this.state.searchInput,
      searchType: ''
    })
    event.preventDefault()
  }

  handleLetterClick(event){
    this.setState({
      searchTerm: event.target.textContent,
      searchType: 'letter'
    })
  }

  handleTagClick(event){
    this.setState({
      searchTerm: event.target.textContent,
      searchType: 'tag'
    })
  }

  render() {
    return (
      <Container className={styles.PicaBlogList} style={{padding: '0', margin: '0px', maxWidth: '100%', height: '100%'}}>
        <Row style={{margin: '0', height: '100%'}}>
          <Col className='styles.Navigation' md='3' style={{backgroundColor: 'darkgrey'}}>
            <p>Search by Post Title</p>
            <form onSubmit={this.handleSubmit}>
              <input type='text' onChange={this.handleInput}></input>
            </form>
            <br/>
            <hr/>
            <br/>
            <span className={styles.SearchButton} onClick={this.handleTagClick}>Performance</span>
            <span className={styles.SearchButton} onClick={this.handleTagClick}>Late Night</span>
            <span className={styles.SearchButton} onClick={this.handleTagClick}>Institute</span>
            <span className={styles.SearchButton} onClick={this.handleTagClick}>TBA</span>
          </Col>
          <Col className='Results' md='9' style={{overflow: 'scroll', height: '100%', padding: '0'}}>
            <div style={{width: '100%', height: '15%', backgroundColor: 'white', zIndex: '3', position: 'relative'}}>
              <h1>LATEST</h1>
            </div>
            <div style={{width: '100%', height: '85%'}}>
              <PicaArtistQuery searchType={this.state.searchType} searchTerm={this.state.searchTerm} />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PicaBlogList
