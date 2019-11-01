import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import styles from './styles.module.css'

import PicaArtistQuery from '../PicaArtistQuery'

class PicaArtistArchive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchInput: '',
      searchTerm: 'a',
      searchType: 'letter'
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

  renderDesktop(){
    return(
      <h1>d</h1>
    )
  }

  render() {
    return (
      <div className={styles.PicaArtistArchive}>
        <div className={styles.Navigation}>
          <p>BROWSE THE ARCHIVE</p>
          <p>By Artist</p>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>A</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>B</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>C</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>D</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>E</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>F</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>G</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>H</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>I</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>J</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>K</span>
          <br/>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>L</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>M</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>N</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>O</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>P</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>Q</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>R</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>S</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>T</span>
          <br/>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>U</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>V</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>W</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>X</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>Y</span>
          <span className={styles.SearchButton} onClick={this.handleLetterClick}>Z</span>
          <br/>
          <hr/>
          <br/>
          <p>BY CATEGORY</p>
          <p className={styles.SearchButton} onClick={this.handleTagClick}>Performance</p>
          <p className={styles.SearchButton} onClick={this.handleTagClick}>Late Night</p>
          <p className={styles.SearchButton} onClick={this.handleTagClick}>Food</p>
          <br/>
          <hr/>
          <br/>
          <div className={styles.search}>
            <p>SEARCH</p>
            <form onSubmit={this.handleSubmit}>
              <input id={styles.search} type='text' onChange={this.handleInput}></input>
            </form>
          </div>
        </div>
        <div className={styles.Results}>
          <div style={{width: '100%', backgroundColor: 'white', zIndex: '3', position: 'relative', paddingBottom: '10px'}}>
            <h1 style={{fontSize: '160px', lineHeight: '.8'}}>ARTISTS & ARCHIVE</h1>
            <h4 style={{fontSize: '30px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
          </div>
          <div style={{width: '100%', height: '85%'}}>
            <PicaArtistQuery searchType={this.state.searchType} searchTerm={this.state.searchTerm} />
          </div>
        </div>
      </div>
    )
  }
}

export default PicaArtistArchive
