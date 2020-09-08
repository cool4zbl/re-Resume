import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Subtitle, Item, List, BracketSpan, Link, Heading } from 'components'

import { getEntities } from './schema.js'

const Wrapper = styled.section`
  color: ${palette('grayscale', 1)};
`

const Education = props => {
  const { schools } = getEntities(props)

  return (
    <Wrapper {...props}>
      <Heading level={2}>
        教育经历
        <Subtitle>Education</Subtitle>
      </Heading>
      <div>
        {Object.keys(schools).map(k => {
          const { name, degree, dates, url, majors, more } = schools[k]
          return (
            <div key={k}>
              <Heading level={3} palette={'pigeonRed'}>
                <Link href={url}>{name}</Link>
                <BracketSpan square>{dates}</BracketSpan>
              </Heading>
              {
                <List hasIndex>
                  <Item>{[degree, majors.join(' / '), more].join(' / ')}</Item>
                </List>
              }
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

Education.propTypes = {
  schools: PropTypes.array
}

export default Education
