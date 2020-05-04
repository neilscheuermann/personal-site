import React from "react"
import {
  FaRegNewspaper as BlogIcon,
  FaHome as HomeIcon,
  FaInfoCircle as InfoIcon,
  FaLaptopCode as PortfolioIcon,
} from "react-icons/fa"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  MOBILE_WIDTH,
  navLinks,
  removeDefaultLinkFormatting,
} from "../utils/constants"
import { IconContext } from "react-icons"

function StyledIconWrapper({ children }) {
  return (
    <IconContext.Provider value={{ color: "black", size: "40px" }}>
      {children}
    </IconContext.Provider>
  )
}

function NavBar() {
  const renderIcon = name => {
    if (name === "home") {
      return <HomeIcon />
    } else if (name === "portfolio") {
      return <PortfolioIcon />
    } else if (name === "blog") {
      return <BlogIcon />
    } else if (name === "about") {
      return <InfoIcon />
    }
  }

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
        style={removeDefaultLinkFormatting}
      >
        <StyledIconWrapper>{renderIcon(name)}</StyledIconWrapper>
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
