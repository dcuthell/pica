import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import styles from './styles.module.css'

import PicaEventQuery from '../PicaEventQuery'

class PicaEventList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      searchTerm: '',
      searchType: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
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

  resetSearch(){
    this.setState({
      searchTerm: '',
      searchType: ''
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
      <Container className={styles.PicaEventList} style={{padding: '0', margin: '0px', maxWidth: '100%', height: '100%'}}>
        <Row style={{margin: '0', height: '100%'}}>
          <Col className={styles.Navigation} md='3' style={{backgroundColor: 'darkgrey'}}>
            <p>Search by Event or Artist Name</p>
            <form onSubmit={this.handleSubmit}>
              <input type='text' onChange={this.handleInput}></input>
            </form>
            <h4>Search by Tag</h4>
            <p className={styles.SearchButton} onClick={this.resetSearch}>ALL</p>
            <p className={styles.SearchButton} onClick={this.handleTagClick}>PERFORMANCE</p>
            <p className={styles.SearchButton} onClick={this.handleTagClick}>VISUAL ART</p>
            <p className={styles.SearchButton} onClick={this.handleTagClick}>FESTIVAL</p>
            <p className={styles.SearchButton} onClick={this.handleTagClick}>CONVERSATION</p>
            <p className={styles.SearchButton} onClick={this.handleTagClick}>PARTNER PROJECTS</p>
           
          </Col>
          <Col className='Results' md='9'>
            <div style={{width: '100%', height: '15%'}}>
              <h1>EVENTS</h1>
            </div>
            <div style={{width: '100%', height: '85%', overflow: 'scroll'}}>
              <PicaEventQuery searchType={this.state.searchType} searchTerm={this.state.searchTerm} />
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PicaEventList