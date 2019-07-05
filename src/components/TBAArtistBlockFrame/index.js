import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Col, Row } from 'reactstrap'
import TBAArtistBlock from '../TBAArtistBlock'
import TBASelector from '../TBASelector'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class TBAArtistBlockFrame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'title',
      tagName: 'TBA'
    }
    this.setTagName = this.setTagName.bind(this)
  }

  setTagName(tagName){
    if(tagName !== this.state.tagName){
      this.setState({
        tagName
      })
    }
  }

  render() {
    const GET_CONTENT = gql`
    query TBAEventsWithTags($tagName : String! = "TBA"){
      tags(where: {name : $tagName}) {
        name
        programs (orderBy: sortNumber_ASC){
          sortNumber
          title
          dateAndTime
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
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          const programs = data.tags[0].programs
          let list = programs.map((program, index) =>
            <Col key={index} xs='6' xl='4' style={{padding: '15px 0px 15px 0px'}}>
              <TBAArtistBlock
                eventName={program.title}
                eventDate={program.dateAndTime[0]}
                artistName={(program.artists[0] ? program.artists[0].name : 'No Linked Artist')}
                detailsShort={program.shortDescription}
                detailsLong={program.longDescription.html}
                YouTubeId={program.youTubeVideoId}
                VimeoId={program.vimeoVideoId}
                galleryItems={program.gallery ? program.gallery.galleryItems : [{media: {handle: 'AKuZYOQsSkugUiFbLM0v'}}]}
              />
            </Col>
          )
          if (list.length === 0){
            list = (
              <Col xs='6' xl='4'>
                <h1>No events of this type have been scheuled, check back in soon!</h1>
              </Col>
            )
          }
          console.log(list)
          return (
            <Container>
              <Row>
                <Col xl='12'>
                  <TBASelector setTagName={this.setTagName}/>
                </Col>
                {list}
                <Col xl='8'>
                  <h1 style={{color: '#fff100'}}>
                    COMPLETE 2019 SCHEDULE AND ARTIST LINE-UP WILL BE ANNOUNCED SOON!
                  </h1>
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
