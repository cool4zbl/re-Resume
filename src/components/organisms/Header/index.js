import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const BigName = styled.h1`
  text-align: center;
  color: ${palette('pigeonRed', 2)};
`

// config.name
const Header = props => {
  return (
    <BigName {...props}>
      {props.name || '<ZBL />'}
    </BigName>
  )
}

Header.propTypes = {
  name: PropTypes.string,
}

export default Header
