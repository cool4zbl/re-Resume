import React from 'react'

import Summary from '../Summary'
import WorkExp from '../WorkExperience'

export default function Main(props: CommonProps): React.ReactNode {
  const { resumeData } = props
  const { basics, work, projects } = resumeData

  return (
    <div>
      <Summary />
      <WorkExp work={work} />
      <div>Projects</div>
    </div>
  )
}
