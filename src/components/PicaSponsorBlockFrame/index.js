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
      <Query query={GET_CONTENT}>
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
          let sponsorList = []
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

          let superheroList = superhero.map((sponsor, index) =>
            <Col md='4'>
              <img src={'https://media.graphcms.com/' + sponsor.logo.handle} alt={sponsor.name} style={{maxWidth: '100%', maxHeight: '200px'}} />
            </Col>
          )
          return (
            <div style={{width: '100%'}}>
              <Col xl='12' style={{backgroundColor: '#FFFBF3'}}>
                <Container style={{height: 'auto'}}>
                  <Row>
                    <Col md='12'>
                      <h3>SUPERHERO $100,000+</h3>
                    </Col>
                    {superheroList}
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
