import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Subtitle, Item, List, BracketSpan, Link, Heading } from 'components'

import { getEntities } from './schema.js'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`

const Education = props => {
  const { schools } = getEntities(props)

  return (
    <Wrapper {...props}>
      <Heading level={2}>
        教育经历
        <Subtitle>Education</Subtitle>
      </Heading>
      <div>
        {Object.keys(schools).map((k, i) => {
          const { name, degree, dates, url, majors } = schools[k]
          return (
            <div key={i}>
              <Heading level={3} palette={'pigeonRed'}>
                <Link to={url}>
                  {name}
                </Link>
                <BracketSpan square={true}>
                  {dates}
                </BracketSpan>
              </Heading>
              {
                <List hasIndex={true}>
                  {majors.map((r, j) =>
                    <Item key={j}>
                      {r}
                    </Item>
                  )}
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
  schools: PropTypes.array,
}

export default Education
