import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import { getUser, isLoggedIn } from "../services/auth"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Neil Scheuermann"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Hello {isLoggedIn() ? getUser().name : "world"}!</h1>
        <p>
          {isLoggedIn() ? (
            <>
              You are logged in, so check your{" "}
              <Link to="/app/profile">profile</Link>
            </>
          ) : (
            <>
              You should <Link to="/app/login">log in</Link> to see restricted
              content
            </>
          )}
        </p>
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
          I'm a software engineer who specializes in JavaScript/React frontent,
          and Elixir/Ecto on the backend.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
