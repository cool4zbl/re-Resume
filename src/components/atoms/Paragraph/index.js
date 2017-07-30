import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Paragraph = styled.p`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

Paragraph.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

Paragraph.defaultProps = {
  palette: 'grayscale',
}

export default Paragraph
