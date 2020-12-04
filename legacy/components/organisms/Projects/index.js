import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import {
  Image,
  Paragraph,
  Link,
  Item,
  Subtitle,
  BracketSpan,
  List,
  Heading
} from 'components'
import { getEntities } from './schema.js'

const Wrapper = styled.section`
  color: ${palette('grayscale', 1)};
`
const Span = styled.span`
  margin-right: 0.5rem;
`

const renderHighlights = highlights => {
  return (
    <List hasIndex>
      {highlights.map((r, j) => {
        return <Item key={j}>{r}</Item>
      })}
    </List>
  )
}
const Projects = props => {
  const { projects } = props

  const nProjects = getEntities(projects)
  const { company, openSource } = nProjects

  // todo: 分类展示
  const proj = { ...company, ...openSource }

  return (
    <Wrapper {...props}>
      <Heading level={2}>
        项目经验
        <Subtitle>Projects</Subtitle>
      </Heading>
      <div>
        {Object.keys(proj).map((k, i) => {
          const {
            title,
            code,
            dates,
            description,
            highlights,
            url,
            image
          } = proj[k]
          return (
            <div key={i}>
              <Heading level={3} palette={'pigeonRed'}>
                <Link href={url}>
                  <Span>{title}</Span>
                </Link>
                <BracketSpan square>{dates}</BracketSpan>
                {code ? (
                  <BracketSpan square>
                    <Link href={code}>code</Link>
                  </BracketSpan>
                ) : (
                  ''
                )}
              </Heading>
              {image && <Image bgUrl={image.path} {...image} />}
              <Paragraph>{description}</Paragraph>
              {renderHighlights(highlights)}
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

Projects.propTypes = {
  projects: PropTypes.array
}

export default Projects
