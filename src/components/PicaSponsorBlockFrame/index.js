import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class PicaSponsorBlockFrame extends Component {
 
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
      <Query query={GET_CONTENT}>
        {({ loading, error, data }) => {
          if (loading) return (
            <h1 style={{textAlign: 'center', width: '100%', color: '#fff100', lineHeight: '60vh', textTransform: 'uppercase'}}>Loading Sponsors&hellip;</h1>
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
              superhero.push(
                <Col md='4'>
                  <img src={'https://media.graphcms.com/' + sponsor.logo.handle} alt={sponsor.name} style={{maxWidth: '100%', maxHeight: '200px'}} />
                </Col>
              )
            }
            if(sponsor.donorLevel === 'Presenting'){
              presenting.push(
                <Col md='4'>
                  <img src={'https://media.graphcms.com/' + sponsor.logo.handle} alt={sponsor.name} style={{maxWidth: '100%', maxHeight: '200px'}} />
                </Col>
              )
            }
            if(sponsor.donorLevel === 'Major'){
              major.push(
                <Col md='4'>
                  <img src={'https://media.graphcms.com/' + sponsor.logo.handle} alt={sponsor.name} style={{maxWidth: '100%', maxHeight: '200px'}} />
                </Col>
              )
            }
            if(sponsor.donorLevel === 'Underwriter'){
              underwriter.push(
                <Col md='4'>
                  <p>{sponsor.name}</p>
                </Col>
              )
            }
            if(sponsor.donorLevel === 'Champion'){
              champion.push(
                <Col md='4'>
                  <p>{sponsor.name}</p>
                </Col>
              )
            }
            if(sponsor.donorLevel === 'Patron'){
              patron.push(
                <Col md='4'>
                  <p>{sponsor.name}</p>
                </Col>
              )
            }
            if(sponsor.donorLevel === 'Supporter'){
              supporter.push(
                <Col md='4'>
                  <p>{sponsor.name}</p>
                </Col>
              )
            }
            if(sponsor.donorLevel === 'Advocate'){
              advocate.push(
                <Col md='4'>
                  <p>{sponsor.name}</p>
                </Col>
              )
            }
            if(sponsor.donorLevel === 'Enthusiast'){
              enthusiast.push(
                <Col md='4'>
                  <p>{sponsor.name}</p>
                </Col>
              )
            }
            if(sponsor.donorLevel === 'Contributor'){
              contributor.push(
                <Col md='4'>
                  <p>{sponsor.name}</p>
                </Col>
              )
            }
          })

          return (
            <div style={{width: '100%'}}>
              <Col xl='12' style={{backgroundColor: '#FFFBF3'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>SUPERHERO $100,000+</h3>
                    </Col>
                    {superhero}
                  </Row>
                </Container>
              </Col>
              <Col xl='12' style={{backgroundColor: '#e4e4e4'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>PRESENTING $50,000</h3>
                    </Col>
                    {presenting}
                  </Row>
                </Container>
              </Col>
              <Col xl='12' style={{backgroundColor: '#f4ecd9'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>MAJOR $25,000+</h3>
                    </Col>
                    {major}
                  </Row>
                </Container>
              </Col>
              <Col xl='12' style={{backgroundColor: 'white'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>UNDERWRITER $10,000</h3>
                    </Col>
                    {underwriter}
                  </Row>
                </Container>
              </Col>
              <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
              <Col xl='12' style={{backgroundColor: 'white'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>CHAMPION $5,000</h3>
                    </Col>
                    {champion}
                  </Row>
                </Container>
              </Col>
              <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
              <Col xl='12' style={{backgroundColor: 'white'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>PATRON $2,500</h3>
                    </Col>
                    {patron}
                  </Row>
                </Container>
              </Col>
              <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
              <Col xl='12' style={{backgroundColor: 'white'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>SUPPORTER $1,000</h3>
                    </Col>
                    {supporter}
                  </Row>
                </Container>
              </Col>
              <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
              <Col xl='12' style={{backgroundColor: 'white'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>ADVOCATE $500</h3>
                    </Col>
                    {advocate}
                  </Row>
                </Container>
              </Col>
              <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
              <Col xl='12' style={{backgroundColor: 'white'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>ENTHUSIAST $250</h3>
                    </Col>
                    {enthusiast}
                  </Row>
                </Container>
              </Col>
              <hr style={{borderTop: '1px solid grey', margin: '5px', width: '100%'}} />
              <Col xl='12' style={{backgroundColor: 'white'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>CONTRIBUTOR $100</h3>
                    </Col>
                    {contributor}
                  </Row>
                </Container>
              </Col>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default PicaSponsorBlockFrame
