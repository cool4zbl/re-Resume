import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { Link, Heading } from 'components'

const BigName = styled(Heading)`
  font-weight: 400;
  font-size: 3.6em;
  color: ${palette('pigeonRed', 1)};
  text-align: center;
  border-bottom: 0;
`
const MyLink = styled(Link)`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
      background: ${palette('pigeonRed', 1)};
      color: ${palette('white', 1)};
    }
  }
`

// config.name
const Header = props => {
  return (
    <BigName {...props}>
      <MyLink reverse={true} href={'/'}>
        {' '}{props.name || '<ZBL />'}{' '}
      </MyLink>
    </BigName>
  )
}

Header.propTypes = {
  name: PropTypes.string,
}

export default Header
