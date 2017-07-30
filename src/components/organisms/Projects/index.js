import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { BracketSpan, List, Heading } from 'components'

import { getEntities } from './schema.js'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`

const Item = styled.li``
const Span = styled.span`margin-right: .5rem;`

const Projects = props => {
  const { projects } = props

  const nProjects = getEntities(projects)
  const { company, openSource } = nProjects

  return (
    <Wrapper {...props}>
      <Heading level={2}>Projects</Heading>
      <div>
        {Object.keys(company).map((k, i) => {
          const { title, dates, description, highlights } = company[k]
          return (
            <div key={i}>
              <Heading level={3} palette={'pigeonRed'}>
                {title}
                <BracketSpan square={true}>
                  {dates}
                </BracketSpan>
              </Heading>
              <div>
                {description}
              </div>
              <List hasIndex={true}>
                {highlights.map((r, j) =>
                  <Item key={j}>
                    {r}
                  </Item>
                )}
              </List>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

Projects.propTypes = {
  projects: PropTypes.array,
}

export default Projects
