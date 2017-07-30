import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { Subtitle, Link, Icon, Item, List, Heading } from 'components'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`

const Span = styled.span`margin-right: .5em;`

const Social = styled(({ type, id, ...props }) => {
  const link = `https://${type}.com/${id.startsWith('@') ? id.slice(1) : id}`
  return (
    <Link href={link}>
      <Icon palette={'grayscale'} icon={type} />
      {id}
    </Link>
  )
})``

const keyMap = {
  base: '坐标',
  apply: '求职',
  experience: '工作经验',
}
const Email = ({ email, ...props }) => {
  return (
    <Item>
      <Span>Email:</Span>
      <Link href={`mailto:${email}`} {...props}>
        {email}
      </Link>
    </Item>
  )
}
const BlogLink = ({ blog, ...props }) => {
  return (
    <Item>
      <Span>Blog:</Span>
      <Link href={blog} {...props}>
        {blog}
      </Link>
    </Item>
  )
}

const Bio = ({ name, blog, email, github, twitter, display, ...props }) => {
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
          return (
            <Item key={i} type={k}>
              <Span>
                {keyMap[k]}:
              </Span>
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

Bio.propTypes = {}

export default Bio
