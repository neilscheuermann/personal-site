import React from "react"
import Img from "gatsby-image"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function HomePage({ data, location }) {
  const siteTitle = "Neil Scheuermann"

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <h1>
        Hey people{" "}
        <span role="img" aria-label="laptop emoji">
          💻
        </span>
      </h1>
      <p>
        I'm a software engineer who specializes in JavaScript/React frontend,
        and Elixir/Ecto on the backend.
      </p>
      <Img fluid={data.headshot.childImageSharp.fluid} />
    </Layout>
  )
}

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
