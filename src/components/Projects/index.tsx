import React from 'react'
import Heading from '../Heading'
import BaseList from '../BaseList'

interface ProjectsProps {
  dataSource: Resume.Project[]
}

function Projects(props: ProjectsProps): React.ReactNode {
  const { dataSource } = props

  return (
    <BaseList
      title="project"
      dataSource={dataSource}
      renderItem={proj => (
        <BaseList.Item key={proj.title}>
          <Heading level={3}>{proj.title}</Heading>
        </BaseList.Item>
      )}
    ></BaseList>
  )
}

export default Projects
