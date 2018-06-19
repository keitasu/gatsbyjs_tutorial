import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { rhythm } from "../utils/typography";

export default ({ data}) => {
  return (
    <div>
      <H1>
        Amazing Pandas Eating Things
      </H1>
      <h4>{ data.allMarkdownRemark.totalCount} posts</h4>
      { data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={ node.id }>
          <Link
            to={ node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >
          <H3>
            { node.frontmatter.title }{' '}
            <Span>— { node.frontmatter.date }</Span>
          </H3>
          <p>{ node.excerpt }</p>
        </Link>
        </div>
      ))}
    </div>
  )
}

const H1 = styled.h1`
  display: inline-block;
  border-bottom: 1px solid;
`

const H3 = styled.h3`
  margin-bottom: ${ rhythm(1 / 4)};
`

const Span = styled.span`
  color: #bbb;
`
export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`