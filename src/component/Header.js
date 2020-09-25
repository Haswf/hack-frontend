import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../shared/theme'

const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${props => props.theme.white};
  border-bottom: 2px solid ${props => props.theme.gray};
  padding-left: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    padding-left: 40px;
  }
`
const HeaderLogo = styled.div`
  color: ${props => props.theme.black};
  font-size: 18px;
  padding: 0;
`

const HeaderProfile = styled.div`
  color: ${props => props.theme.black};
  font-size: 16px;
  display: flex;
  padding: 0 20px 0 15px;
  justify-content: center;
  align-items: center;
  border-left: 1px solid ${props => props.theme.gray};
  min-height: 60px;
  cursor: pointer;
  @media (min-width: ${props => props.theme.mediumDeviceWidth}) {
    padding: 0 40px 0 25px;
  }
`

const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  margin-right: ${props => (props.header ? '15px' : '0')};
`

class Header extends Component {
  state = {
    userImage: 'https://avatars3.githubusercontent.com/u/5058640?s=460&v=4',
    userName: 'Stratos'
  }

  render() {
    const { userImage, userName } = this.state
    return (
      <ThemeProvider theme={theme}>
        <>
          <HeaderWrapper>
            <HeaderLogo>Discussion</HeaderLogo>
            <HeaderProfile>
              <Avatar header src={userImage} />
              {userName}
            </HeaderProfile>
          </HeaderWrapper>
        </>
      </ThemeProvider>
    )
  }
}

export default Header
