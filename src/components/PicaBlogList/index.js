import React, { Component } from 'react'
import styles from './styles.module.css'

import PicaBlogQuery from '../PicaBlogQuery'

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
    this.toggleNav = this.toggleNav.bind(this)
    this.closeNav = this.closeNav.bind(this)
    this.openNav = this.openNav.bind(this)
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

  renderDesktop(){
    return(
      <div className={styles.PicaBlogList}>
        <div className={styles.Navigation}>
          <p>BROWSE EVENTS BY CATEGORY</p>
          <br/>
          <p className={styles.SearchButton} onClick={this.handleTagClick}>Performance</p>
          <p className={styles.SearchButton} onClick={this.handleTagClick}>Late Night</p>
          <p className={styles.SearchButton} onClick={this.handleTagClick}>Institute</p>
          <p className={styles.SearchButton} onClick={this.handleTagClick}>TBA</p>
          <div className={styles.search}>
            <form onSubmit={this.handleSubmit}>
              <input id={styles.searchInput} type='text' placeholder='Search' onChange={this.handleInput}></input>
              <i className='fas fa-search' />
            </form>
          </div>
        </div>
        <div className={styles.Results}>
         <div style={{width: '100%', height: '20%', backgroundColor: 'white', zIndex: '3', position: 'relative'}}>
            <h1 style={{fontSize: '160px'}}>LATEST</h1>
          </div>
          <div style={{width: '100%', height: '85%'}}>
            <PicaBlogQuery searchType={this.state.searchType} searchTerm={this.state.searchTerm} />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  renderMobile(){
    return(
      <div className={styles.PicaMobileBlogList}>
        <div className={styles.MobileTitle}>
          <h1 style={{fontSize: '60px'}}>LATEST</h1>
        </div>
        <div className={styles.MobileNavigationHeader} onClick={this.toggleNav}>
          <p>BROWSE BY CATEGORY</p>
          <div className={styles.button} onClick={this.handleClick}>
            {this.state.isOpen ? <p>&circ;</p> : <p>&#711;</p>}
          </div>
        </div>
        <div className={this.state.isOpen ? styles.MobileNavigationContentOpen : styles.MobileNavigationContentClosed}>
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
        </div>
        <div className={this.state.isOpen ? styles.MobileResultsOpen : styles.MobileResultsClosed}>
          <div style={{width: '100%', height: '85%'}}>
            <PicaBlogQuery searchType={this.state.searchType} searchTerm={this.state.searchTerm} />
          </div>
        </div>
      </div>
    )
  }

  render() {
    if(window.innerWidth > 767){
      return(
        this.renderDesktop()
      )
    } else{
      return (
        this.renderMobile()
      )
    }
  }
}

export default PicaBlogList
