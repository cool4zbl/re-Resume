import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { List, Heading } from 'components'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`

const Item = styled.li``
const Span = styled.span``

// Object
const Obj = props => {
  return (
    <div>
      {Object.keys(props).map((k, i) => {
        return (
          <Item key={i}>
            <Span>
              {' '}{k}:{' '}
            </Span>
            {props[k]}
          </Item>
        )
      })}
    </div>
  )
}

// Array
const Skills = styled(({ list, title }) => {
  return (
    <Item>
      <Span>
        {title}:{' '}
      </Span>
      {list.map((v, i) =>
        <Span key={i}>
          {v}{' '}
        </Span>
      )}
    </Item>
  )
})``

const Bio = props => {
  return (
    <Wrapper {...props}>
      <Heading level={2}>Bio</Heading>
      <List>
        {Object.keys(props).map((k, i) => {
          if (typeof props[k] === 'function') {
            return
          }
          if (Array.isArray(props[k])) {
            return <Skills key={i} list={props[k]} title={k} />
          }
          if (typeof props[k] === 'object') {
            return <Obj key={i} {...props[k]} />
          }
          return (
            <Item key={i} type={k}>
              <Span>
                {k} :{' '}
              </Span>
              {props[k]}
            </Item>
          )
        })}
      </List>
    </Wrapper>
  )
}

Bio.propTypes = {}

export default Bio
