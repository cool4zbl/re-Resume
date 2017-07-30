import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const styles = css`
  list-style: ${ifProp('hasIndex', 'normal', 'none')};
`
const Ol = styled.ol``
const Ul = styled.ul``

const List = styled(({ ordered, children, ...props }) => {
  return createElement(ordered ? Ol : Ul, props, children)
})`${styles}`

List.propTypes = {
  ordered: PropTypes.bool,
}

List.defaultProps = {
  ordered: false,
  hasIndex: false,
}

export default List
