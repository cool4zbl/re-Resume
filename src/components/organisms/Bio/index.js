import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { Subtitle, Link, Icon, Item, List, Heading } from 'components'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`

const Span = styled.span``

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

const Social = styled(({ type, id, ...props }) => {
  const link = `https://${type}.com/${id.startsWith('@') ? id.slice(1) : id}`
  return (
    <Link href={link}>
      <Icon palette={'grayscale'} icon={type} />
      {id}
    </Link>
  )
})``

const Bio = ({
  name,
  contacts,
  github,
  twitter,
  selfIntroduce,
  skills,
  display,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Heading level={2}>
        基本信息
        <Subtitle>Basic Info</Subtitle>
      </Heading>
      <Social type={'github'} id={github} />
      <Social type={'twitter'} id={twitter} />
      <List hasIndex={true}>
        {Object.keys(props).map((k, i) => {
          if (typeof props[k] === 'function') {
            return
          }
          if (Array.isArray(props[k])) {
            return <Skills key={i} list={props[k]} title={k} />
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
