import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Icon, Item, List, Subtitle, Link, Heading } from 'components'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`
const Span = styled.span`margin-right: .5em;`

const Social = styled(({ type, id, ...props }) => {
  let link,
    prefix = (
      <Span>
        {type.toUpperCase()}:
      </Span>
    )
  if (id.startsWith('@')) {
    link = `https://${type}.com/${id.slice(1)}`
    prefix = <Icon palette={'grayscale'} icon={type} />
  }
  if (type === 'douban') {
    link = `https://${type}.com/people/cool4zbl`
    prefix = <Span>豆瓣:</Span>
  }
  return (
    <Item>
      {prefix}
      <Link href={link}>
        {id}
      </Link>
    </Item>
  )
})``

const SocialMedia = props => {
  return (
    <Wrapper {...props}>
      <Heading level={2}>
        社交媒体
        <Subtitle>Social</Subtitle>
      </Heading>
      <List hasIndex={true}>
        {Object.keys(props).map((s, i) => {
          return <Social key={i} type={s} id={props[s]} />
        })}
      </List>
    </Wrapper>
  )
}

SocialMedia.propTypes = {
  blog: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
  douban: PropTypes.string,
}

export default SocialMedia
