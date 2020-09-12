import React from 'react'
import { SectionHeading } from '../Heading'

export default function WorkExperience(props: CommonProps): React.ReactNode {
  const { resumeData } = props
  const { work } = resumeData

  return (
    <div>
      <SectionHeading>Work exp</SectionHeading>
      {work.map(w => (
        <span key={w.company}>{w.company}</span>
      ))}
    </div>
  )
}
