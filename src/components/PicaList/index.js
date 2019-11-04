import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaEventListItem from '../PicaEventListItem'

class PicaEventQuery extends React.Component {
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

  addInOrder(programList, program){
    if(programList.length === 0){
      programList.push({
        title: program.title,
        artist: program.artists[0] ? program.artists[0].name : 'No Artist',
        image: 'https://media.graphcms.com/resize=width:300/' + program.gallery.galleryItems[0].media.handle,
        description: program.shortDescription,
        tags: program.tags,
        route: program.route,
        sortTimeVal: program.sortTimeVal,
        dateAndTime: program.dateAndTime[0]
      })
    } else {
      for(let i = 0; i < programList.length; i++){
        if(program.sortTimeVal < programList[i].sortTimeVal){
          programList.splice(i, 0, {
            title: program.title,
            artist: program.artists[0] ? program.artists[0].name : 'No Artist',
            image: 'https://media.graphcms.com/resize=width:300/' + program.gallery.galleryItems[0].media.handle,
            tags: program.tags,
            route: program.route,
            description: program.shortDescription,
            sortTimeVal: program.sortTimeVal,
            dateAndTime: program.dateAndTime[0]
          })
          break;
        }
        if(i === (programList.length - 1)){
          programList.push({
            title: program.title,
            artist: program.artists[0] ? program.artists[0].name : 'No Artist',
            image: 'https://media.graphcms.com/resize=width:300/' + program.gallery.galleryItems[0].media.handle,
            tags: program.tags,
            route: program.route,
            description: program.shortDescription,
            sortTimeVal: program.sortTimeVal,
            dateAndTime: program.dateAndTime
          })
          break;
        }
      }
    }
  }

  importFilterAndSort(programs){
    //Date filtering starts with a date object that takes current Date, then gets the ISOStrings for the beginning of the day, the end of the day, and the end of the week
    let d = new Date('2019-09-06T01:30:00.000Z')
    d.setHours(0)
    d.setMinutes(0)
    let daystart = d.toISOString()
    let dayval = d.getDay()
    d.setDate(d.getDate() + 1)
    let dayend = d.toISOString()
    d.setDate(d.getDate() + (7 - ((dayval-1) % 7)))
    let weekend = d.toISOString()
    let eventsTodayData = []
    let eventsThisWeekData = []
    let eventsUpcomingData = []
    for (let i = 0; i < programs.length; i++) {
      let today = false
      let thisweek = false
      let upcoming = false
      let sortTimeVal = ''
      for (let j = 0; j < programs[i].testDateAndTime.length; j++) {
        if(programs[i].testDateAndTime[j] < daystart){
          break;
        }
        if(programs[i].testDateAndTime[j] < dayend){
          today = true
          sortTimeVal = programs[i].testDateAndTime[j]
          break;
        }
        if(programs[i].testDateAndTime[j] < weekend){
          thisweek = true
          sortTimeVal = programs[i].testDateAndTime[j]
          break;
        }
        if(programs[i].testDateAndTime[j] > weekend){
          upcoming = true
          sortTimeVal = programs[i].testDateAndTime[j]
        }
      }
      if ((!today && !thisweek) && !upcoming){
        continue;
      }
      let program = programs[i]
      program.sortTimeVal = sortTimeVal
      if(today){
        this.addInOrder(eventsTodayData, program)
        continue;
      }
      if(thisweek){
        this.addInOrder(eventsThisWeekData, program)
        continue;
      }
      if(upcoming){
        this.addInOrder(eventsUpcomingData, program)
      }
    }
    let data = {
      eventsTodayData,
      eventsThisWeekData,
      eventsUpcomingData
    }
    return data
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

  shouldComponentUpdate(prevProps){
    if(this.props.searchTerm !== prevProps.searchTerm){
      this.setState({
        cardOpen: false
      })
      return true
    }
    return true
  }

  renderData(){

  }
  render(){
    const SEARCH_CONTAIN = gql`
      query EventSearchByTitleandArtist($searchTerm : String){
        programs(where: { 
          OR: [{title_contains: $searchTerm}, {artists_some: {name_contains: $searchTerm}}]
        }){
          testDateAndTime
          title
          artists {
            name
          }
          dateAndTime
          shortDescription
          route
          gallery {
            galleryItems {
              media {
                handle
              }
            }
          }
          tags {
            name
          }
        }
      }
    `
    const SEARCH_TAG = gql`
      query EventbyTagName($searchTerm : String){
        programs(where: {tags_some: {name: $searchTerm}}){
          testDateAndTime
          title
          artists {
            name
          }
          dateAndTime
          shortDescription
          route
          gallery {
            galleryItems {
              media {
                handle
              }
            }
          }
          tags {
            name
          }
        }
      }
    `
    
    return(
      <Query query={(this.props.searchType === 'tag') ? SEARCH_TAG : SEARCH_CONTAIN} variables={{"searchTerm" : this.props.searchTerm}}>
        {({ loading, error, data }) => {
          if (loading) return (
            <h1>Loading&hellip;</h1>
          )
          if (error) return `Error! ${error.message}`
          let programData = this.importFilterAndSort(data.programs)
          let eventsToday = programData.eventsTodayData.map((program, index) =>
            <PicaEventListItem
              title={program.title}
              artist={program.artist}
              tags={program.tags}
              route={program.route}
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              setOpen={this.setOpen}
              setClose={this.setClose}
              cardOpen={this.state.cardOpen}
              image={program.image}
              description={program.description}
              background={this.setBackgroundColor(index)}
              time={program.dateAndTime}
            />
          )
          let eventsThisWeek = programData.eventsThisWeekData.map((program, index) =>
            <PicaEventListItem
              title={program.title}
              artist={program.artist}
              tags={program.tags}
              route={program.route}
              key={index + programData.eventsTodayData.length}
              index={index + programData.eventsTodayData.length}
              activeIndex={this.state.activeIndex}
              setOpen={this.setOpen}
              setClose={this.setClose}
              cardOpen={this.state.cardOpen}
              image={program.image}
              description={program.description}
              background={this.setBackgroundColor(index + programData.eventsTodayData.length)}
              time={program.dateAndTime}
            />
          )
          let eventsUpcoming = programData.eventsUpcomingData.map((program, index) =>
            <PicaEventListItem
              title={program.title}
              artist={program.artist}
              tags={program.tags}
              route={program.route}
              key={index + programData.eventsTodayData.length + programData.eventsThisWeekData.length}
              index={index + programData.eventsTodayData.length + programData.eventsThisWeekData.length}
              activeIndex={this.state.activeIndex}
              setOpen={this.setOpen}
              setClose={this.setClose}
              cardOpen={this.state.cardOpen}
              image={program.image}
              description={program.description}
              background={this.setBackgroundColor(index + programData.eventsTodayData.length + programData.eventsThisWeekData.length)}
              time={program.dateAndTime}
            />
          )
          
          return (
            <div style={{height: '80vh', width: '100%'}}>
              <PicaEventListItem section index={0} activeIndex={this.state.activeIndex} cardOpen={this.state.cardOpen}>
                <h1>TODAY</h1>
              </PicaEventListItem>
              {eventsToday}
              <PicaEventListItem section index={eventsToday.length} activeIndex={this.state.activeIndex} cardOpen={this.state.cardOpen}>
                <h1>THIS WEEK</h1>
              </PicaEventListItem>
              {eventsThisWeek}
              <PicaEventListItem section index={eventsToday.length + eventsThisWeek.length} activeIndex={this.state.activeIndex} cardOpen={this.state.cardOpen}>
                <h1>UPCOMING</h1>
              </PicaEventListItem>
              {eventsUpcoming}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default PicaEventQuery