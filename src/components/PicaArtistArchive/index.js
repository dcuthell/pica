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

  render() {
    return (
      <Container className={styles.PicaArtistArchive} style={{padding: '0', margin: '0px', maxWidth: '100%', height: '100%'}}>
        <Row style={{margin: '0', height: '100%'}}>
          <Col className='styles.Navigation' md='3' style={{backgroundColor: 'darkgrey'}}>
            <h4>BROWSE THE ARCHIVE</h4>
            <p>BY ARTIST</p>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>A</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>B</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>C</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>D</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>E</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>F</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>G</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>H</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>I</span>
            <br/>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>J</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>K</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>L</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>M</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>N</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>O</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>P</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>Q</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>R</span>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>S</span>
            <br/>
            <span className={styles.SearchButton} onClick={this.handleLetterClick}>T</span>
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
            <span className={styles.SearchButton} onClick={this.handleTagClick}>Performance</span>
            <span className={styles.SearchButton} onClick={this.handleTagClick}>Late Night</span>
            <span className={styles.SearchButton} onClick={this.handleTagClick}>Food</span>
            <br/>
            <hr/>
            <br/>
            <div className={styles.search}>
              <p>SEARCH</p>
              <form onSubmit={this.handleSubmit}>
                <input id={styles.search} type='text' onChange={this.handleInput}></input>
              </form>
            </div>
            
          </Col>
          <Col className='Results' md='9' style={{overflow: 'scroll', height: '100%', padding: '0'}}>
            <div style={{width: '100%', backgroundColor: 'white', zIndex: '3', position: 'relative', paddingBottom: '10px'}}>
              <h1 style={{fontSize: '4.75rem'}}>ARTISTS & ARCHIVE</h1>
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h4>
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

export default PicaArtistArchive
