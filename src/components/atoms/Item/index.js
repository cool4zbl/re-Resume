import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledLi = styled.li``

const Item = ({ palette, theme, children, ...props }) => {
  return (
    <StyledLi {...props}>
      {children}
    </StyledLi>
  )
}

Item.propTypes = {
  palette: PropTypes.string,
  theme: PropTypes.string,
}

Item.defaultProps = {
  palette: 'grayscale',
}

export default Item
