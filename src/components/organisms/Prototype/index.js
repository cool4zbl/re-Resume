import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { List, BracketSpan, Link, Heading } from 'components'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`

const Item = styled.li``

const Prototype = props => {
  const { hobbies, quotes } = props

  return (
    <Wrapper {...props}>
      <Heading level={2}>Prototype</Heading>
      <List hasIndex={true}>
        <Item>
          <Link to={'/about'}>About me</Link>
        </Item>
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
