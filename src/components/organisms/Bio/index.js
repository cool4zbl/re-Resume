import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { Subtitle, Link, Icon, Item, List, Heading } from 'components'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`

const Span = styled.span`margin-right: .5em;`

const keyMap = {
  gender: '性别',
  age: '年龄',
  base: '坐标',
  apply: '应聘岗位',
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

Bio.propTypes = {
  name: PropTypes.string,
  apply: PropTypes.string,
  experience: PropTypes.string,
  base: PropTypes.string,
  email: PropTypes.string,
  blog: PropTypes.string,
}

export default Bio
