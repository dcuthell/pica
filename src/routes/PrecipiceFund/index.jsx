import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default function PrecipiceFund (props) {
  const GET_CONTENT = gql`
    query content($first: Int, $skip: Int, $where: ContentWhereInput, $orderBy: ContentOrderByInput) {
      contents: contentsConnection(first: $first, skip: $skip, where: $where, orderBy: $orderBy) {
        edges {
          node {
            status
            updatedAt
            createdAt
            id
            title
            caption
            body
            media {
              status
              updatedAt
              createdAt
              id
              handle
              fileName
              height
              width
              size
              mimeType
            }
            event {
              id
            }
            artist {
              id
            }
            richBody {
              html
            }
          }
        }
      }
    }
  `

  return (
    <Container style={{padding: '0', margin: '0px', maxWidth: '100%', height: 'auto'}}>
      <Row>
        <Col xl='12'>
          <div style={{backgroundColor: 'grey'}}>
            <Query query={GET_CONTENT}>
              {({ loading, error, data }) => {
                if (loading) return 'Loading...'
                if (error) return `Error! ${error.message}`
                console.log(data.contents.edges[1].node.media[0].handle)
                return (
                  <div>
                    <div dangerouslySetInnerHTML={{ __html: data.contents.edges[0].node.richBody.html }} />
                    <img src={'https://media.graphcms.com/' + data.contents.edges[1].node.media[0].handle} alt='somepic' />
                  </div>
                )
              }}
            </Query>
          </div>
        </Col>
        <Col>
          <h1>Precipice Fund</h1>
        </Col>
      </Row>
    </Container>
  )
}
