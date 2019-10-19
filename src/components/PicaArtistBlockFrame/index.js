import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import styles from './styles.module.css'

import PicaArtistBlock from '../PicaArtistBlock'

class PicaArtistBlockFrame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 100,
      lastIndex: 0,
      cardOpen: false
    }
    this.setOpen = this.setOpen.bind(this)
    this.setClose = this.setClose.bind(this)
  }

  setOpen(index) {
    this.setState({
      cardOpen: true,
      activeIndex: index
    })
  }
  setClose(index) {
    this.setState({
      cardOpen: false,
      lastIndex: index
    })
  }

  setBackgroundColor(index){
    const i = index % 6
    if(i === 0){
      return '#B0C170'
    }
    if(i === 1){
      return '#0DAE5D'
    }
    if(i === 2){
      return '#8EA9D5'
    }
    if(i === 3){
      return '#FFC2EB'
    }
    if(i === 4){
      return '#FF5928'
    }
    if(i === 5){
      return '#8A69D4'
    }
  }

  render() {
    const GET_PROGRAMS = gql`
      query {
        programs {
          testDateAndTime
          title
          artists {
            name
          }
          shortDescription
          route
          gallery {
            galleryItems {
              media {
                handle
              }
            }
          }
        }
      }
    `
    return (
      <Query query={GET_PROGRAMS}>
          {({ loading, error, data }) => {
            if (loading) return (
              <h1>Loading&hellip;</h1>
            )
            if (error) return `Error! ${error.message}`
            const myDate = '2019-09-13T01:30:00.000Z'
            let index = 0
            let list = data.programs.map((program) => {
              let display = false
              program.testDateAndTime.forEach((dateTime) => {
                if (dateTime >= myDate){
                  display = true
                }
              })
              if (display){
                index += 1
                return(
                  <PicaArtistBlock
                    title={program.title}
                    artist={program.artists[0] ? program.artists[0].name : 'No Artist'}
                    key={index-1}
                    index={index-1}
                    activeIndex={this.state.activeIndex}
                    cardTotal={data.programs.length}
                    setOpen={this.setOpen}
                    setClose={this.setClose}
                    cardOpen={this.state.cardOpen}
                    image={'https://media.graphcms.com/resize=width:300/' + program.gallery.galleryItems[0].media.handle}
                    description={program.shortDescription}
                    background={this.setBackgroundColor(index-1)}
                  />
                )
              }
            })
            return (
              <div style={{height: '80vh', width: '100%'}}>
                {list}
              </div>
            )
          }}
        </Query>
    )
  }
}

export default PicaArtistBlockFrame
