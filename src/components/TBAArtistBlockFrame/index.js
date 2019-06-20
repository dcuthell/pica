import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Col, Row } from 'reactstrap'
import TBAArtistBlock from '../TBAArtistBlock'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class TBAArtistBlockFrame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      programs: []
    }
  }

  render() {
    const GET_CONTENT = gql`
    query {
      tags(where: {name : "TBA"}) {
        name
        programs {
          title
          dateAndTime
          shortDescription
          longDescription {
            html
          }
          youTubeVideoId
          vimeoVideoId
          imageGallery {
            handle
            photoCredit
          }
          artists {
            name
          }
        }
      }
    }
    `

    return (
      <Query query={GET_CONTENT}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          const programs = data.tags[0].programs
          console.log(programs)
          let list = programs.map((program, index) =>
            <Col md='12' lg='6' style={{padding: '15px 0px 15px 0px'}}>
              <TBAArtistBlock
                eventName={program.title}
                eventDate={program.dateAndTime[0]}
                artistName={program.artists[0].name}
                detailsShort={program.shortDescription}
                detailsLong={program.longDescription.html}
                YouTubeId={program.youTubeVideoId}
                VimeoId={program.vimeoVideoId}
                image={(program.imageGallery[0].handle ? program.imageGallery[0].handle : '123')}
              />
            </Col>
          )
          return (
            list
          )
        }}
      </Query>
    )
  }
}

export default TBAArtistBlockFrame
