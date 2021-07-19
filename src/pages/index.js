import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function HomePage({ data, location }) {
  const siteTitle = 'Neil Scheuermann'

  return (
    <Layout location={location} title={siteTitle}>
      <HomePageStyles>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <SectionOneStyles>
          <div className="cover-image">
            <Img
              fluid={data.headshot.childImageSharp.fluid}
              imgStyle={{
                borderRadius: `16px`,
              }}
            />
          </div>
          <h1>
            I'm Neil{' '}
            <span role="img" aria-label="laptop emoji">
              💻
            </span>
          </h1>
          <p>
            I'm a software engineer who specializes in{' '}
            <strong>JavaScript/React</strong> on the frontend, and{' '}
            <strong>Elixir/Phoenix</strong> on the backend.
          </p>
          <p>
            My goal is to enjoy the life I've been given and leave a positive
            impact on this world.
          </p>
          <h2>My Journey</h2>
          <p>Coming soon...</p>
        </SectionOneStyles>
        {/* TODO>>>>: Maybe try something like this for my home page. */}
        {/* (http://ianenders.com/) */}
        {/*  */}
        {/* TODO>>>: I kinda like the simple layout of this site. Something along */}
        {/* these lines. (https://seanoconn.org/) */}
      </HomePageStyles>
    </Layout>
  )
}

const HomePageStyles = styled.div``

const SectionOneStyles = styled.div`
  .cover-image {
    width: 10vw;
    float: right;
    margin-left: 16px;

    @media (max-width: ${MOBILE_MAX_WIDTH}) {
      width: initial;
      float: initial;
      margin: 0 10%;
    }
  }

  & > h1,
  h2 {
    text-align: center;
  }

  & > :last-child {
    text-align: center;
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
