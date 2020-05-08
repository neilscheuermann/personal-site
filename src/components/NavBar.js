import React, { useState } from "react"
import { Link } from "gatsby"
import useMediaQuery from "react-hook-media-query"
import styled from "styled-components"
import { IconContext } from "react-icons"
import {
  FaRegNewspaper as BlogIcon,
  FaHome as HomeIcon,
  FaInfoCircle as InfoIcon,
  FaLaptopCode as PortfolioIcon,
  FaBars as SideNavIcon,
} from "react-icons/fa"
import {
  MOBILE_WIDTH,
  navLinks,
  removeDefaultLinkFormatting,
} from "../utils/constants"

function StyledIconWrapper({ children }) {
  return (
    <IconContext.Provider value={{ color: "black", size: "40px" }}>
      {children}
    </IconContext.Provider>
  )
}

function NavBar() {
  const [hideSideNav, setHideSideNav] = useState(true)
  const isMobile = useMediaQuery(`(max-width: ${MOBILE_WIDTH})`) || true

  const renderIcon = name => {
    if (name === "home") {
      return <HomeIcon />
    } else if (name === "work") {
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

  return (
    <div>
      <SideNavButton onClick={() => setHideSideNav(!hideSideNav)}>
        <SideNavIcon />
      </SideNavButton>
      <LinksListWrapper hide={isMobile && hideSideNav}>
        {renderNavLinks}
      </LinksListWrapper>
    </div>
  )
}

const SideNavButton = styled.button`
  position: absolute;
  z-index: 2;
  top: 10px;
  left: 10px;
  background: none;
  border: none;

  ${/* Web */ ""}
  @media only screen and (min-width: ${MOBILE_WIDTH}) {
    display: none;
  }
  
`

const LinksListWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;
  padding: 10px;
  display: flex;

  ${/* Web */ ""}
  @media only screen and (min-width: ${MOBILE_WIDTH}) {
    justify-content: flex-end;
  }

  ${/* Mobile */ ""}
  @media only screen and (max-width: ${MOBILE_WIDTH}) {
    flex-direction: column;
    background-color: #ededed;
    padding-top: 70px;
    width: 90%;
    max-width: 130px;
    position: absolute;
    left: -130px;
    height: 100%;
    transition: transform .3s;
  }

  ${({ hide }) =>
    !hide &&
    `
      transform: translateX(100%);
  `}

`

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;

  ${({ active }) =>
    active &&
    `
      border-top: 4px solid black;
    `}

  ${/* Web */ ""}
  @media only screen and (min-width: ${MOBILE_WIDTH}) {
    > svg {
      display: none;
    }
  }
`

export default NavBar
