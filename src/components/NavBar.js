import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { navLinks, MOBILE_WIDTH } from "../utils/constants"

function NavBar() {
  const renderMenuLinks = navLinks.map(navLink => {
    const { name, linkTo } = navLink

    return (
      <NavLink key={name}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={linkTo}
        >
          {name}
        </Link>
      </NavLink>
    )
  })

  return (
    <Container>
      <LinksContainer>{renderMenuLinks}</LinksContainer>
    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 1;

  @media only screen and (max-width: ${MOBILE_WIDTH}) {
    bottom: 0;
  }

  @media only screen and (min-width: ${MOBILE_WIDTH}) {
    top: 0;
  }
`

const LinksContainer = styled.div`
  display: flex;
`

const NavLink = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
`

export default NavBar
