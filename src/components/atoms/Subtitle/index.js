import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const Span = styled.span`
  color: ${palette('grayscale', 4)};
  font-size: .8em;
  font-weight: 400;
  &:before {
    content: " / ";
  }
`

const Subtitle = ({ palette, theme, children, ...props }) => {
  return (
    <Span {...props}>
      {children.toUpperCase()}
    </Span>
  )
}

Subtitle.propTypes = {
  palette: PropTypes.string,
  theme: PropTypes.string,
}

Subtitle.defaultProps = {
  palette: 'grayscale',
}

export default Subtitle
