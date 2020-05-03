import React from "react"
import { FaHome as HomeIcon } from "react-icons/fa"
import { Link } from "gatsby"
import styled from "styled-components"
import { navLinks, MOBILE_WIDTH } from "../utils/constants"

function NavBar() {
  const renderNavLinks = navLinks.map(navLink => {
    const { name, linkTo } = navLink
    const isCurrentPage = () => {
      // see if current page matches the name
    }

    return (
      <NavLink
        key={name}
        active={isCurrentPage()}
        to={linkTo}
        style={{ boxShadow: `none`, textDecoration: `none`, color: `inherit` }}
      >
        <HomeIcon />
        {name.toUpperCase()}
      </NavLink>
    )
  })

  return <LinksListWrapper>{renderNavLinks}</LinksListWrapper>
}

const LinksListWrapper = styled.nav`
  position: fixed;
  width: 100vw;
  z-index: 1;
  background-color: white;

  display: flex;

  @media only screen and (min-width: ${MOBILE_WIDTH}) {
    top: 0;
    justify-content: flex-end;
  }

  @media only screen and (max-width: ${MOBILE_WIDTH}) {
    bottom: 0;
    justify-content: space-between;
  }
`

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  ${({ active }) =>
    active &&
    `
      border-top: 4px solid black;
    `}

  @media only screen and (min-width: ${MOBILE_WIDTH}) {
    > svg {
      display: none;
    }
  }
`

export default NavBar
