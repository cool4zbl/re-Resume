import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const StyledSpan = styled.span`
  margin-right: .5rem;
  font-weight: 400;
  color: ${palette('grayscale', 4)};

  /* note the space between the ' ' */
  &:before {
    content: "${ifProp('square', ' [', ifProp('round', ' (', ' {'))}";
  }
  &:after {
    content: "${ifProp('square', ']', ifProp('round', ' )', ' }'))}";
  }
`

const BracketSpan = ({ children, ...props }) => {
  return (
    <StyledSpan {...props}>
      {children}
    </StyledSpan>
  )
}

BracketSpan.propTypes = {
  palette: PropTypes.string,
  theme: PropTypes.string,
  square: PropTypes.bool,
  round: PropTypes.bool,
}

BracketSpan.defaultProps = {
  palette: 'grayscale',
  square: false,
  round: false,
}

export default BracketSpan
