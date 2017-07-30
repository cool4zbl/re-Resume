import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const Block = styled.div`color: ${palette('grayscale', 1)};`

Block.propTypes = {
  palette: PropTypes.string,
}

Block.defaultProps = {
  palette: 'grayscale',
}

export default Block
