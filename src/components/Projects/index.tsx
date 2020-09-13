import React from 'react'
import Heading, { SectionHeading } from '../Heading'
import BaseList from '../BaseList'

interface ProjectsProps {
  dataSource: Project[]
}

function Projects(props: ProjectsProps): React.ReactNode {
  const { dataSource } = props

  return (
    <div>
      {dataSource.map(proj => (
        <div key={proj.title}>
          <Heading level={3}>{proj.title}</Heading>
        </div>
      ))}
    </div>
  )
}

export default Projects
