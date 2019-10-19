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
            //Date filtering starts with a date object that takes current Date, then gets the ISOStrings for the beginning of the day, the end of the day, and the end of the week
            let d = new Date('2019-09-14T01:30:00.000Z')
            d.setHours(0)
            d.setMinutes(0)
            let daystart = d.toISOString()
            let dayval = d.getDay()
            d.setDate(d.getDate() + 1)
            let dayend = d.toISOString()
            d.setDate(d.getDate() + (7 - ((dayval-1) % 7)))
            let weekend = d.toISOString()
            let index = 0
            let eventsToday = []
            let eventsThisWeek = []
            let eventsUpcoming = []
            for (let i = 0; i < data.programs.length; i++) {
              let today = false
              let thisweek = false
              let upcoming = false
              for (let j = 0; j < data.programs[i].testDateAndTime.length; j++) {
                if(data.programs[i].testDateAndTime[j] < daystart){
                  break;
                }
                if(data.programs[i].testDateAndTime[j] < dayend){
                  today = true
                  break;
                }
                if(data.programs[i].testDateAndTime[j] < weekend){
                  thisweek = true
                  break;
                }
                if(data.programs[i].testDateAndTime[j] > weekend){
                  upcoming = true
                }
              }
              if ((!today && !thisweek) && !upcoming){
                continue;
              }
              let program = data.programs[i]
              if(today){
                console.log(index)
                index += 1
                eventsToday.push(
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
                continue;
              }
              if(thisweek){
                index += 1
                eventsThisWeek.push(
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
                continue;
              }
              if(upcoming){
                index += 1
                eventsThisWeek.push(
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
            }
          
            return (
              <div style={{height: '80vh', width: '100%'}}>
                <PicaArtistBlock section index={0} activeIndex={this.state.activeIndex} cardOpen={this.state.cardOpen}>
                  <h1>TODAY</h1>
                </PicaArtistBlock>
                {eventsToday}
                <PicaArtistBlock section index={eventsToday.length} activeIndex={this.state.activeIndex} cardOpen={this.state.cardOpen}>
                  <h1>THIS WEEK</h1>
                </PicaArtistBlock>
                {eventsThisWeek}
                <PicaArtistBlock section index={eventsToday.length + eventsThisWeek.length} activeIndex={this.state.activeIndex} cardOpen={this.state.cardOpen}>
                  <h1>UPCOMING</h1>
                </PicaArtistBlock>
                {eventsUpcoming}
              </div>
            )
          }}
        </Query>
    )
  }
}

export default PicaArtistBlockFrame
