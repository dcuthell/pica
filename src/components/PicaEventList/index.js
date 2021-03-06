import React, { Component } from 'react'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'

import PicaEventQuery from '../PicaEventQuery'

class PicaEventList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      searchTerm: '',
      searchType: '',
      isOpen: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.resetSearch = this.resetSearch.bind(this)
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
    if(this.state.mobile){
      this.closeNav()
    }
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
    if(this.state.mobile){
      this.closeNav()
    }
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

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  renderMobile(){
    return(
      <div className={styles.PicaMobileEventList}>
        <div className={styles.MobileTitle}>
          <h1 style={{fontSize: '4rem'}}>EVENTS</h1>
        </div>
        <div className={styles.MobileNavigationHeader} onClick={this.toggleNav}>
          <p>BROWSE BY CATEGORY</p>
          <div className={styles.button} onClick={this.handleClick}>
            {this.state.isOpen ? <p>&circ;</p> : <p>&#711;</p>}
          </div>
        </div>
        <div className={this.state.isOpen ? styles.MobileNavigationContentOpen : styles.MobileNavigationContentClosed}>
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
            <form onSubmit={this.handleSubmit}>
              <input id={styles.searchInput} type='text' placeholder='Search' onChange={this.handleInput}></input>
              <i className='fas fa-search' />
            </form>
          </div>
        </div>
        <div className={this.state.isOpen ? styles.MobileResultsOpen : styles.MobileResultsClosed}>
          <div style={{width: '100%', height: '85%', overflow: 'scroll'}}>
            <PicaEventQuery searchType={this.state.searchType} searchTerm={this.state.searchTerm} />
          </div>
        </div>
      </div>
    )
  }
  
  renderDesktop(){
    return(
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
              <form onSubmit={this.handleSubmit}>
                <input id={styles.searchInput} type='text' placeholder='Search' onChange={this.handleInput}></input>
                <i className='fas fa-search' />
              </form>
            </div>
        </div>
        <div className={styles.Results}>
          <div style={{width: '100%', height: '25%'}}>
            <h1 style={{fontSize: '160px'}}>EVENTS</h1>
          </div>
          <div style={{width: '100%', height: '75%', overflow: 'scroll'}}>
            <PicaEventQuery searchType={this.state.searchType} searchTerm={this.state.searchTerm} />
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

export default PicaEventList
