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
      isOpen: true,
      activeIndex: index
    })
  }
  setClose(index) {
    this.setState({
      isOpen: false,
      activeIndex: 0,
      lastIndex: index
    })
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
            let list = data.programs.map((program, index) => {
              let display = false
              program.testDateAndTime.forEach((dateTime) => {
                if (dateTime >= myDate){
                  display = true
                }
              })
              if (display){
                return(
                  <PicaArtistBlock title={program.title} artist={program.artists[0] ? program.artists[0].name : 'No Artist'} index={index} activeIndex={this.state.activeIndex} cardTotal={data.programs.length} setOpen={this.setOpen} setClose={this.setClose} isOpen={this.state.isOpen} image={'https://media.graphcms.com/resize=width:300/' + program.gallery.galleryItems[0].media.handle} description={program.shortDescription} />
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
