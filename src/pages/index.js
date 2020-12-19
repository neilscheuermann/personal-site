import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Neil Scheuermann"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img
          style={{ margin: 0, borderRadius: 100, height: 200 }}
          src="./neil-scheuermann-headshot.jpg"
          alt="Gatsby Scene"
        />
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
      </Layout>
    )
  }
}

export default IndexPage
