import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import TBAArtistBlock from '../TBAArtistBlock'
import TBASelector from '../TBASelector'
import TBADateSelector from '../TBADateSelector'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class TBAArtistBlockFrame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'title',
      tagName: 'TBA',
      date: ''
    }
    this.setTagName = this.setTagName.bind(this)
    this.setDate = this.setDate.bind(this)
  }

  setTagName(tagName){
    if(tagName !== this.state.tagName){
      this.setState({
        tagName
      })
    }
  }

  setDate(date){
    if(date !== this.state.date){
      this.setState({
        date
      })
    }
  }

  /* Takes datetime string like this:
  2019-09-13T01:30:00.000Z
  */
  parseDateAndTimeString(string){
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const monthVal = parseInt(string.slice(5,7)) - 1
    const month = months[monthVal]
    const hourUTC = parseInt(string.slice(11,13))
    const day = (hourUTC >= 7) ? parseInt(string.slice(8,10)) : parseInt(string.slice(8,10)) - 1
    const hour24 = (hourUTC + 17) % 24
    const ampm = (hour24 > 11) ? 'pm' : 'am'
    const hour12 = (hour24 !== 12) ? (hour24 % 12) : 12
    const minute = string.slice(14,16)
    return month + ' ' + day + ' ' + hour12 + ':' + minute + ampm
  }

  parseDateAndTimeArray(array){
    let datesAndTimes = ''
    if(array.length < 1){
      datesAndTimes = 'TBD'
    } else {
      datesAndTimes = this.parseDateAndTimeString(array[0])
    }
    if(array.length > 1){
      let i
      for(i=1; i < array.length; i++){
        datesAndTimes += ' / ' + this.parseDateAndTimeString(array[i])
      }
    }
    return datesAndTimes
  }

  render() {
    const GET_CONTENT = gql`
    query TBAEventsWithTags($tagName : String! = "TBA"){
      tags(where: {name : $tagName}) {
        name
        programs (orderBy: sortNumber_ASC where: {status: PUBLISHED}){
          sortNumber
          title
          dateAndTime
          webEventId
          testDateAndTime
          shortDescription
          longDescription {
            html
          }
          youTubeVideoId
          vimeoVideoId
          gallery {
            galleryItems (orderBy: sortNumber_ASC){
              sortNumber
              media {
                handle
                photoCredit
              }
            }
          }
          artists {
            name
          }
        }
      }
    }
    `

    return (
      <Query query={GET_CONTENT} variables={{"tagName" : this.state.tagName}}>
        {({ loading, error, data }) => {
          if (loading) return (
            <h1>Loading...</h1>
          )
          if (error) return `Error! ${error.message}`
          let programs = data.tags[0].programs
          if (this.state.date !== '') {
            let newList = programs.filter((program)=>{
              let check = false
              if (program.testDateAndTime.length === 0) {
                return false
              }
              program.testDateAndTime.forEach((dateTime) => {
                let dateVal = Date.parse(dateTime)
                let someDate = new Date()
                someDate.setTime(dateVal)
                if(someDate.getDate() === this.state.date) {
                  check = true
                }
              })
              return check
            })
            programs = newList
          }
          let list = programs.map((program, index) =>
            <Col key={index} xs='6' xl='4' style={{padding: '15px 0px 15px 0px'}}>
              <TBAArtistBlock
                eventName={program.title}
                eventDate={program.dateAndTime}
                artistName={(program.artists[0] ? program.artists[0].name : 'No Linked Artist')}
                detailsShort={program.shortDescription}
                detailsLong={program.longDescription.html}
                webEventId={program.webEventId}
                YouTubeId={program.youTubeVideoId}
                VimeoId={program.vimeoVideoId}
                galleryItems={program.gallery ? program.gallery.galleryItems : [{media: {handle: 'AKuZYOQsSkugUiFbLM0v'}}]}
              />
            </Col>
          )
          if (list.length === 0){
            list = (
              <Col xs='6' xl='4'>
                <h1>No events of this type have been scheduled, check back in soon!</h1>
              </Col>
            )
          }
          return (
            <Container>
              <Row>
                <Col xs='6' style={{padding: '15px 0px 15px 18px'}}>
                  <TBASelector setTagName={this.setTagName} tagName={this.state.tagName}/>
                </Col>
                <Col xs='6' style={{padding: '15px 0px 15px 18px'}}>
                  <TBADateSelector setDate={this.setDate}/>
                </Col>
                {list}
                <Col xl='4'>
                  <h1>Individual Ticket Sales Opening Soon!</h1>
                </Col>
              </Row>
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default TBAArtistBlockFrame
