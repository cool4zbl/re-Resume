import React from 'react'
import BaseList from '../BaseList'
import { formatDate } from '../utils/index'

interface ProjectsProps extends BaseListProps<Resume.Project> {
  locale?: 'en' | 'zh'
}

enum ProjectTypeText {
  '0' = 'Business',
  '1' = 'Open Source',
}

function Projects(props: ProjectsProps): React.ReactNode {
  const { dataSource, locale } = props

  const renderItem = (item: Resume.Project): React.ReactNode => {
    return (
      <BaseList.Item key={item.title} style={{ marginBottom: '1rem' }}>
        <BaseList.Item.Meta
          style={{ marginBottom: '.5rem' }}
          title={item.title}
          description={<div>{ProjectTypeText[item.type]}</div>}
          extra={
            <span>
              {formatDate(item.startDate, locale)} ~{' '}
              {formatDate(item.endDate, locale)}
            </span>
          }
        />
        <div>{item.description}</div>
        <div>
          {item.highlights.map(high => (
            <p key={high}>{high}</p>
          ))}
        </div>
      </BaseList.Item>
    )
  }

  return (
    <BaseList
      title="projects"
      dataSource={dataSource}
      renderItem={renderItem}
    ></BaseList>
  )
}

export default Projects
