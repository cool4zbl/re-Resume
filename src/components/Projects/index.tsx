import React from 'react'
import BaseList from '../BaseList'
import { formatTimeRange, transformText } from '../utils'

interface ProjectsProps extends BaseListProps<Resume.Project> {
  locale?: 'en' | 'zh'
}

enum ProjectTypeText {
  '0' = 'Business',
  '1' = 'Open Source',
}

enum ProjectTypeTextZh {
  '0' = '商业项目',
  '1' = '开源项目',
}

enum ProjectType {
  'en' = ProjectTypeText,
  'zh' = ProjectTypeTextZh,
}

// TODO: Add `code` link to every project.
function Projects(props: ProjectsProps): React.ReactNode {
  const { dataSource, locale = 'en' } = props

  const renderItem = (item: Resume.Project): React.ReactNode => {
    return (
      <BaseList.Item key={item.title} style={{ marginBottom: '1rem' }}>
        <BaseList.Item.Meta
          style={{ marginBottom: '.5rem' }}
          title={item.title}
          description={<div>{ProjectType[locale][item.type]}</div>}
          extra={
            <span>
              {formatTimeRange({
                start: item.startDate,
                end: item.endDate,
                locale,
              })}
            </span>
          }
        />
        <div>{transformText(item.description)}</div>
        <div>
          {item.highlights.map(high => (
            <p key={high}>{transformText(high)}</p>
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
