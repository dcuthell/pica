import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaPost from '../../components/PicaPost'

export default function OldPost (props) {
  const GET_CONTENT = gql`
    query FindPostByRoute($route : String){
      posts (where: {route: $route}){
        title
        author
        publishDate
        content
        route
      }
    }
  `
  return (
    <Container>
      <Row>
        <Col>
          <Query query={GET_CONTENT} variables={{"route" : props.match.params.id}}>
            {({ loading, error, data }) => {
              if (loading) return (
                <h1>Loading Post...</h1>
              )
              if (error) return `Error! ${error.message}`
              return (
                <div>
                  <PicaPost
                    title={data.posts[0].title}
                    author={data.posts[0].author}
                    image={[]}
                    tags={[]}
                    date={data.posts[0].publishDate}
                    body={data.posts[0].content}
                    route={data.posts[0].route}
                  />
                </div>
              )
            }}
          </Query>
        </Col>
      </Row>
    </Container>
  )
}
