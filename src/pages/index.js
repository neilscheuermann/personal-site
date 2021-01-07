import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function HomePage({ data, location }) {
  const siteTitle = 'Neil Scheuermann'

  return (
    <Layout location={location} title={siteTitle}>
      <HomePageStyles>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div class="cover-image">
          <Img
            fluid={data.headshot.childImageSharp.fluid}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </div>
        <h1>
          Hey people{' '}
          <span role="img" aria-label="laptop emoji">
            💻
          </span>
        </h1>
        <p>
          I'm a software engineer who specializes in JavaScript/React frontend,
          and Elixir/Ecto on the backend.
        </p>
        {/* TODO>>>>: Maybe try something like this for my home page. */}
        {/* (http://ianenders.com/) */}
        {/*  */}
        {/* TODO>>>: I kinda like the simple layout of this site. Something along */}
        {/* these lines. (https://seanoconn.org/) */}
      </HomePageStyles>
    </Layout>
  )
}

const HomePageStyles = styled.div`
  .cover-image {
    width: 10vw;
  }
`

export const query = graphql`
  query {
    headshot: file(relativePath: { eq: "neil-scheuermann-headshot.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
