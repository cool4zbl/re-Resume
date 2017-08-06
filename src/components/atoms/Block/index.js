import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const Block = styled.div`color: ${palette('grayscale', 1)};`

Block.propTypes = {
  palette: PropTypes.string,
}

Block.defaultProps = {
  palette: 'grayscale',
}

export default Block
