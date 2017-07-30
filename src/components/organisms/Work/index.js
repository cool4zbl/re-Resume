import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import { Subtitle, Item, BracketSpan, List, Heading } from 'components'

const Wrapper = styled.section`color: ${palette('grayscale', 1)};`

const Span = styled.span`margin-right: .5rem;`

const Jobs = ({ jobs, ...props }) => {
  return (
    <div>
      {jobs.map((job, i) => {
        const { responsibilities, employer, title, location, dates } = job
        return (
          <div key={i}>
            <Heading level={3} palette={'pigeonRed'}>
              <Span>
                {employer}
              </Span>
              <Span>
                —— {title}
              </Span>
              <BracketSpan square={true}>
                {dates}
              </BracketSpan>
            </Heading>
            <List hasIndex={true}>
              {responsibilities.map((r, j) =>
                <Item key={j}>
                  {r}
                </Item>
              )}
            </List>
          </div>
        )
      })}
    </div>
  )
}

const Work = props => {
  return (
    <Wrapper {...props}>
      <Heading level={2}>
        工作经历
        <Subtitle>Work Experience</Subtitle>
      </Heading>
      <Jobs jobs={props.jobs} />
    </Wrapper>
  )
}

Work.propTypes = {}

export default Work
