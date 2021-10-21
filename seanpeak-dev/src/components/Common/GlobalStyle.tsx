import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

const defaultStyle = css`
  @import url('<https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700;800&family=Neuton:wght@700&display=swap>');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font: 112.5%/1.722;
    font-family: 'Lato', sans-serif;
  }

  h1,
  h2,
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
  }

  //h2 {
  //  font-family: 'Neuton', serif;
  //}

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  p {
    margin-bottom: 1.722rem;
  }

  a,
  a:hover {
    color: #4665b7;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
