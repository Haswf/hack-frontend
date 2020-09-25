import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
  }
  * {
    margin: 0;
	  padding: 0;
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
  }
  body {
    background-color: #f5f5f5;
  }
`
const Copy = styled.div`
  position: fixed;
  opacity: 0.5;
  left: 20px;
  bottom: 20px;
  font-size: 10px;
`

class Main extends Component {
  render() {
    return (
      <>
        <GlobalStyle />

        <List />
        <Copy>
          Design by:{' '}
          <a
            href="https://dribbble.com/shots/4990084-Knowledge-Base"
            target="_blank"
          >
            Jan Losert & UI8
          </a>
        </Copy>
      </>
    )
  }
}

export default Main
