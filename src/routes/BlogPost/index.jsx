import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PicaPost from '../../components/PicaPost'

export default function BlogPost (props) {
  const GET_CONTENT = gql`
    query FindBlogPostByRoute($route : String){
      posts (where: {route: $route}){
        status
        title
        author
        image {
          handle
          height
          width
          altText
          photoCredit
        }
        tags {
          name
        }
        date
        body {
          html
        }
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
                    image={data.posts[0].image}
                    tags={data.posts[0].tags}
                    date={data.posts[0].date}
                    body={data.posts[0].body.html}
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
