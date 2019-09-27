import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class PicaSponsorBlockFrame extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const GET_CONTENT = gql`
    query {
      sponsors(orderBy: donorLevel_ASC){
        name
        donorLevel
        logo {
          handle
        }
      }
    }
    `

    return (
      <Query query={GET_CONTENT} variables={{"tagName" : this.state.tagName}}>
        {({ loading, error, data }) => {
          if (loading) return (
            <h1 style={{textAlign: 'center', width: '100%', color: '#fff100', lineHeight: '100vh', textTransform: 'uppercase'}}>Loading&hellip;</h1>
          )
          if (error) return `Error! ${error.message}`
          let sponsors = data.sponsors
          let superhero = []
          let presenting = []
          let major = []
          let underwriter = []
          let champion = []
          let patron = []
          let supporter = []
          let advocate = []
          let enthusiast = []
          let contributor = []
          sponsors.forEach((sponsor) =>{
            if(sponsor.donorLevel === 'Superhero'){
              superhero.push(sponsor)
            }
            if(sponsor.donorLevel === 'Presenting'){
              presenting.push(sponsor)
            }
            if(sponsor.donorLevel === 'Major'){
              major.push(sponsor)
            }
            if(sponsor.donorLevel === 'Underwriter'){
              underwriter.push(sponsor)
            }
            if(sponsor.donorLevel === 'Champion'){
              champion.push(sponsor)
            }
            if(sponsor.donorLevel === 'Patron'){
              patron.push(sponsor)
            }
            if(sponsor.donorLevel === 'Supporter'){
              supporter.push(sponsor)
            }
            if(sponsor.donorLevel === 'Advocate'){
              advocate.push(sponsor)
            }
            if(sponsor.donorLevel === 'Enthusiast'){
              enthusiast.push(sponsor)
            }
            if(sponsor.donorLevel === 'Contributor'){
              contributor.push(sponsor)
            }
          })
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
                artists={program.artists}
                detailsShort={program.shortDescription}
                detailsLong={program.longDescription.html}
                venue={program.venues[0]}
                price={program.price}
                runTime={program.runTime}
                webEventId={program.webEventId}
                YouTubeId={program.youTubeVideoId}
                VimeoId={program.vimeoVideoId}
                galleryItems={program.gallery ? program.gallery.galleryItems : [{media: {handle: 'AKuZYOQsSkugUiFbLM0v'}}]}
                route={program.route}
              />
            </Col>
          )
          if (list.length === 0){
            list = (
              <Col xs='6' xl='4'>
                <h1>No events of this type have been scheduled.</h1>
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
              </Row>
            </Container>
          )
        }}
      </Query>
    )
  }
}

export default PicaSponsorBlockFrame
