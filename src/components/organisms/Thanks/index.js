import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import {
  Subtitle,
  Item,
  Paragraph,
  List,
  BracketSpan,
  Link,
  Heading
} from 'components'

const Wrapper = styled.section`
  color: ${palette('grayscale', 1)};
`

const Thanks = props => {
  const { thanks } = props

  return (
    <Wrapper {...props}>
      <Heading level={2}>
        衷心感谢
        <Subtitle>Thanks</Subtitle>
      </Heading>
      <Paragraph>{thanks}</Paragraph>
    </Wrapper>
  )
}

Thanks.propTypes = {
  thanks: PropTypes.string
}

export default Thanks
