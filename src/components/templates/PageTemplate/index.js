// Page Layout
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, palette } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 0 10vw;
  a {
    color: ${palette('pigeonRed', 1)};
  }
  @media screen and (max-width: 640px) {
    /*padding-top: 3.25rem;*/
  }
`

const Header = styled.header`width: 100%;`

const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
`

const Footer = styled.footer`margin-top: auto;`

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>
        {header}
      </Header>
      <Content>
        {children}
      </Content>
      <Footer>
        {footer}
      </Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default PageTemplate
