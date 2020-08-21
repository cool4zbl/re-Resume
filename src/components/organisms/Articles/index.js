import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { Link, Subtitle, Item, BracketSpan, List, Heading } from 'components'

const Wrapper = styled.section`
  color: ${palette('grayscale', 1)};
`

const Span = styled.span`
  margin-right: 0.5rem;
  color: ${palette('grayscale', 1)};
`

const ArticlesList = ({ articles, ...props }) => {
  return (
    <div>
      {articles.map((a, i) => {
        const { url, title, desc } = a
        return (
          <div key={i}>
            <Heading level={3} palette={'pigeonRed'}>
              <Span>
                <Link href={url}>{title}</Link>
              </Span>
            </Heading>
            <List hasIndex>
              <Item>{desc}</Item>
            </List>
          </div>
        )
      })}
    </div>
  )
}

const Articles = ({ articles, ...props }) => {
  return (
    <Wrapper {...props}>
      <Heading level={2}>
        技术文章
        <Subtitle>Tech Thoughts</Subtitle>
      </Heading>
      <ArticlesList articles={articles} />
    </Wrapper>
  )
}

Articles.propTypes = {}

export default Articles
