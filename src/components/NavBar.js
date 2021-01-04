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
        <div>
          <Link to="/blog">Blog</Link>
          {/* Make this a dropdown to show... */}
          {/* experience/resume */}
          {/* code */}
          <Link to="/connect">About</Link>
        </div>
      </NavMenu>
    </div>
  )
}

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  div > a + a {
    margin-left: 1rem;
  }
`
