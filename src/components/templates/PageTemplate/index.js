// Page Layout
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import theme from '../../themes/default'

const media = Object.keys(theme.sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = theme.sizes[label] / 16
  accumulator[label] = (...args) => css`
  @media (max-width: ${emSize}em) {
    ${css(...args)}
  }
`
  return accumulator
}, {})

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 2rem 20vw;
  border-top: .2rem solid ${palette('pigeonRed', 1)};
  a {
    color: ${palette('pigeonRed', 1)};
  }
  ${media.desktop`padding: 2rem 20vw;`} ${media.tablet`padding: 2rem 10vw;`} ${media.phone`padding: 2rem 8vw;`};
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
