import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { Subtitle, Link, Icon, Item, List, Heading } from 'components'

const Wrapper = styled.section`
  color: ${palette('grayscale', 1)};
`

const Span = styled.span`
  margin-right: 0.5em;
`

const keyMap = {
  base: <Icon fill={'none'} icon="map-pin" />,
  apply: <Icon fill={'none'} icon="activity" />
}

const Email = ({ email, ...props }) => {
  return (
    <Item>
      <Span>
        <Icon fill={'none'} icon="mail" />
      </Span>
      <Link href={`mailto:${email}`} {...props}>
        {email}
      </Link>
    </Item>
  )
}
const BlogLink = ({ blog, ...props }) => {
  return (
    <Item>
      <Span>
        <Icon fill={'none'} icon="link" />
      </Span>
      <Link href={blog} {...props}>
        {blog}
      </Link>
    </Item>
  )
}

const Bio = ({
  name,
  gender,
  age,
  experience,
  blog,
  email,
  github,
  twitter,
  ...props
}) => {
  return (
    <Wrapper {...props}>
      <Heading level={2}>
        基本信息
        <Subtitle>Basic Info</Subtitle>
      </Heading>
      <List hasIndex>
        <Item>
          <Span>👩🏻‍💻</Span>
          <Span> / 24</Span>
          <Span>/ 两年工作经验</Span>
        </Item>
        {Object.keys(props).map(k => {
          return (
            <Item key={k} type={k}>
              <Span>{keyMap[k]}</Span>
              {props[k]}
            </Item>
          )
        })}
        <Email email={email} />
        <BlogLink blog={blog} />
      </List>
    </Wrapper>
  )
}

Bio.propTypes = {
  name: PropTypes.string,
  apply: PropTypes.string,
  experience: PropTypes.string,
  base: PropTypes.string,
  email: PropTypes.string,
  blog: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string
}

export default Bio
