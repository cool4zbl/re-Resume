import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Item, List, Subtitle, BracketSpan, Link, Heading } from 'components'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`

const Prototype = props => {
  const { hobbies, quotes } = props

  return (
    <Wrapper {...props}>
      <Heading level={2}>
        更多属性
        <Subtitle>Prototype</Subtitle>
      </Heading>
      <List hasIndex={true}>
        {hobbies.map((h, i) => {
          return (
            <Item key={i}>
              {h}
            </Item>
          )
        })}
      </List>
    </Wrapper>
  )
}

Prototype.propTypes = {
  hobbies: PropTypes.array,
  quotes: PropTypes.array,
}

export default Prototype
