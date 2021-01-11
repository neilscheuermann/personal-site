import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

export default function Index(props) {
  return (
    <Layout>
      <SEO title="Wes Bos Rxamples" />
      <PageStyles>Wes Bos page</PageStyles>
      <Link to="wesbos/5-flex-panels-image-gallery">
        Flex Panels Image Gallery
      </Link>
    </Layout>
  )
}

const PageStyles = styled.div``
