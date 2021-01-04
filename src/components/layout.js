import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import GlobalStyles, { MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <ViewPortStyles>
        <NavBar />
        <ContentStyles>{children}</ContentStyles>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </ViewPortStyles>
    </>
  )
}

const ViewPortStyles = styled.div`
  // In place to stretch nav and footer when content doesn't fill the screen
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1200px) {
    margin-left: 60px;
    margin-right: 60px;
  }
`

const ContentStyles = styled.div`
  margin-top: var(--header-height);

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    margin-top: var(--header-height-mobile);

    > div {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`
