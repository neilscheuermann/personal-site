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
        <div>{children}</div>
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
  position: relative;

  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${MOBILE_MAX_WIDTH}) {
    max-width: initial;
    margin-left: 16px;
    margin-right: 16px;
  }
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`
