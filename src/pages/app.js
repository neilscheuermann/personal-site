import React from "react"
import { graphql } from "gatsby"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/private-route"
import Profile from "../components/profile"
import Login from "../components/login"

const App = props => (
  <Layout location={props.location} title={props.data.site.siteMetadata.title}>
    <Router>
      <PrivateRoute path="/app/profile" component={Profile} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
