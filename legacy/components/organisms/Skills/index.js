import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Item, List, Subtitle, BracketSpan, Link, Heading } from 'components'

const Wrapper = styled.section`
  color: ${palette('grayscale', 1)};
`

const Skills = props => {
  const { skills } = props

  return (
    <Wrapper {...props}>
      <Heading level={2}>
        专业技能
        <Subtitle>Skills</Subtitle>
      </Heading>
      <List hasIndex>
        {skills.map((h, i) => {
          return <Item key={i}>{h}</Item>
        })}
      </List>
    </Wrapper>
  )
}

Skills.propTypes = {
  hobbies: PropTypes.array,
  quotes: PropTypes.array
}

export default Skills
