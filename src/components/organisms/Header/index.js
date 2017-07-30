import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'components'

const BigName = styled.h1`
  font-weight: 400;
  font-size: 3em;
  text-align: center;
  color: ${palette('pigeonRed', 1)};
`
const MyLink = styled(Link)`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
`

// config.name
const Header = props => {
  return (
    <BigName {...props}>
      <MyLink href={'/'}>
        {' '}{props.name || '<ZBL />'}{' '}
      </MyLink>
    </BigName>
  )
}

Header.propTypes = {
  name: PropTypes.string,
}

export default Header
