import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaPrecipiceListItem from '../PicaPrecipiceListItem'

class PicaPrecipiceList extends React.Component {
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

  render(){
    const GET_CONTENT = gql`
      query {
        precipiceFundRounds{
          roundYear
          roundNumber
          grantees{
            name
            route
          }
          details {
            html
          }
        }
      }
    `
    return(
      <Query query={GET_CONTENT}>
        {({ loading, error, data }) => {
          if (loading) return (
            <h1>Loading&hellip;</h1>
          )
          if (error) return `Error! ${error.message}`
          let list = data.precipiceFundRounds.map((round, index) =>
            <PicaPrecipiceListItem
              year={round.roundYear}
              number={round.roundNumber}
              grantees={round.grantees}
              details={round.details.html}
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              setOpen={this.setOpen}
              setClose={this.setClose}
              cardOpen={this.state.cardOpen}
            />
          )
          return (
            <div style={{height: '80vh', width: '100%', overflow: 'scroll'}}>
              {list}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default PicaPrecipiceList