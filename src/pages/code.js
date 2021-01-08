import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Code(props) {
  return (
    <Layout>
      <SEO title="Code" />
      <CodePageStyles>This is the code page</CodePageStyles>
      <Link to="/wesbos-30">
        This will link to a list/grid of wesbos 30 examples I've completed
      </Link>
    </Layout>
  )
}

const CodePageStyles = styled.div``
