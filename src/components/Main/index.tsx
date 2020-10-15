import React from 'react'
import Summary from '../Summary'
import WorkExp from '../WorkExperience'
import Projects from '../Projects'

export default function Main(props: Resume.CommonProps): React.ReactNode {
  const { resumeData } = props
  const { basics, work, projects } = resumeData

  return (
    <>
      <Summary data={basics?.summary} />
      <WorkExp dataSource={work} />
      <Projects dataSource={projects} />
    </>
  )
}
