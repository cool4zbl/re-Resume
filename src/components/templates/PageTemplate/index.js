// Page Layout
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import styled, { css } from 'styled-components'
import { palette } from 'styled-theme'
import { Typography } from 'components'
import theme from '../../themes/default'

const media = Object.keys(theme.sizes).reduce((accumulator, label) => {
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

const Header = styled.header`
  width: 100%;
`

const Content = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 2rem auto;
`

const Footer = styled.footer`
  margin-top: auto;
`

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="前端开发工程师cool4ZBL的在线简历" />
        <meta name="keywords" content="cool4ZBL的简历,前端,应聘,简历,F2E" />
        <meta property="og:site_name" content="cool4ZBL的简历" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>cool4ZBL- 前端开发工程师 - 简历</title>
      </Helmet>
      {Typography()}
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired
}

export default PageTemplate
