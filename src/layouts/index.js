import React from 'react'
import { css } from 'glamor'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { rhythm } from "../utils/typography";

const linkStyle = css({ float: `right` });

export default ({ children, data }) => (
  <Container>
    <Link to="/">
      <H3>
        Pandas Eating Lots
      </H3>
    </Link>
    <Link className={linkStyle} to={`/about/`}>
      { data.site.siteMetadata.title }
    </Link>
    {children()}
  </Container>
)

const Container = styled.div`
  margin: 0 auto;
  max-width: 700px;
  padding: ${ rhythm(2) };
  padding-top: ${ rhythm(1.5) };
`

const H3 = styled.h3`
  margin-bottom: ${ rhythm(2) };
  display: inline-block;
  font-style: normal;
`

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`