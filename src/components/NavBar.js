import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// import useReactResponsive from '../hooks/useReactResponsive'
// import { WEB_MIN_WIDTH, MOBILE_MAX_WIDTH } from '../styles/GlobalStyles'

export default function NavBar() {
  // const { isMobile } = useReactResponsive()
  // const [isMobileTemp, setIsMobileTemp] = useState('')
  // useEffect(() => {
  //   setIsMobileTemp(isMobile)
  // }, [isMobile])

  return (
    <div>
      <NavMenu>
        <Link to="/">Neil Scheuermann</Link>
        <Link to="/blog">Blog</Link>
        {/* Make `About` a dropdown to show... */}
        {/* experience/resume */}
        {/* code */}
        <Link to="/code">About.code</Link>
      </NavMenu>
    </div>
  )
}

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  & > :first-child {
    margin-right: auto;
  }

  & > a + a {
    margin-left: 1rem;
  }
`
