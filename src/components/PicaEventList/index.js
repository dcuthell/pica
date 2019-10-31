import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

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

  static getDerivedStateFromProps(props, state) {
    if(props.tag){
      return {
        searchTerm: props.tag,
        searchType: 'tag'
      }
    } else {
      return null
    }
  }
  

  render() {
    return (
      <div className={styles.PicaEventList}>
        <div className={styles.Navigation}>
        <p>BROWSE EVENTS BY CATEGORY</p>
            <Link to='/events'>
              <p className={styles.SearchButton} onClick={this.resetSearch}>ALL</p>
            </Link>
            <Link to='/events'>
              <p className={styles.SearchButton} onClick={this.handleTagClick}>PERFORMANCE</p>
            </Link>
            <Link to='/events'>
              <p className={styles.SearchButton} onClick={this.handleTagClick}>VISUAL ART</p>
            </Link>
            <Link to='/events'>
              <p className={styles.SearchButton} onClick={this.handleTagClick}>FESTIVAL</p>
            </Link>
            <Link to='/events'>
              <p className={styles.SearchButton} onClick={this.handleTagClick}>CONVERSATION</p>
            </Link>
            <Link to='/events'>
              <p className={styles.SearchButton} onClick={this.handleTagClick}>PARTNER PROJECTS</p>
            </Link>
            <div className={styles.search}>
              <p>Search by Event or Artist Name</p>
              <form onSubmit={this.handleSubmit}>
                <input id={styles.search} type='text' onChange={this.handleInput}></input>
              </form>
            </div>
        </div>
        <div className={styles.Results}>
        <div style={{width: '100%', height: '15%'}}>
              <h1 style={{fontSize: '6rem'}}>EVENTS</h1>
            </div>
            <div style={{width: '100%', height: '85%', overflow: 'scroll'}}>
              <PicaEventQuery searchType={this.state.searchType} searchTerm={this.state.searchTerm} />
            </div>
        </div>
      </div>
    )
  }
}

export default PicaEventList
