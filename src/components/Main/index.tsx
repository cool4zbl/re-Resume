import React from 'react'
import { SectionHeading } from '../Heading'
import Summary from '../Summary'
import WorkExp from '../WorkExperience'
import Projects from '../Projects'

export default function Main(props: CommonProps): React.ReactNode {
  const { resumeData } = props
  const { basics, work, projects } = resumeData

  return (
    <div>
      <Summary dataSource={basics?.summary} />
      <WorkExp dataSource={work} />
      <Projects dataSource={projects} />
    </div>
  )
}
