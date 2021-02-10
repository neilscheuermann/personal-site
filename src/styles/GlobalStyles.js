import { createGlobalStyle } from 'styled-components'

// Currently only using one break point globally.
// WEB
// @media only screen and (min-width: ${WEB_MIN_WIDTH})
// MOBILE OR TABLET
// @media (max-width: ${MOBILE_MAX_WIDTH})
export const MOBILE_MAX_WIDTH = '768px'
export const WEB_MIN_WIDTH = '769px'

// TODO>>>: Look into how my Books and Buns code autoformats correctly. It's not
// working here.
const GlobalStyles = createGlobalStyle`
  :root {
    // colors
    //
    --black: #000;
    --black-gray: #333;
    --black-gray-faded: #3333331f;
    --background: #f0f0f0;
    --white: #fff;
    // TODO>>> Find color palate, https://coolors.co/

    // dimensions
    //
    --header-height: 96px;
    --header-height-mobile: 78px;
 }

  hr {
    margin: auto;
    width: 50%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

  // Inline code styling
  code {
    background-color: rgba(0, 0, 0, 0.08);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.08), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
      0 3px 1px -2px rgba(0, 0, 0, 0.2);
    margin: 0 4px;
    padding: 0 4px;
    font-size: 16px;
    line-height: 1.5;
  }

  // List styling
  ul {
    list-style: none;
    margin: 8px 0;
  }

  li {
    margin: 8px 0;
    
    &::before {
    
      content: "•"; 
      display: inline-block; 
      width: 1em;
    }
  }

  a {
    box-shadow: none;
    text-decoration: none;
  }

  .jc-center {
    display: flex;
    justify-content: center;
  }
`

export default GlobalStyles
