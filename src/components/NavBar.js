import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// import useReactResponsive from '../hooks/useReactResponsive'

export default function NavBar() {
  // const { isMobile } = useReactResponsive()
  // const [isMobileTemp, setIsMobileTemp] = useState('')
  // useEffect(() => {
  //   setIsMobileTemp(isMobile)
  // }, [isMobile])

  return (
    <NavMenu>
      <Link to="/">Neil Scheuermann</Link>
      <Link to="/blog">Blog</Link>
      {/* Make this `About` with a dropdown to show... */}
      {/* experience/resume */}
      {/* code */}
      <Link to="/code">Code</Link>
    </NavMenu>
  )
}

const NavMenu = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  background: white;
  width: 100%;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  padding: 1rem 0;

  & > :first-child {
    margin-right: auto;
  }

  & > a + a {
    margin-left: 1rem;
  }
`
