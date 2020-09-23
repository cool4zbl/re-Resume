import React from 'react'
import BaseList from '../BaseList'
import { formatTimeRange, transformText } from '../utils'

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

function Projects({
  dataSource,
  locale = 'en',
}: Resume.CommonListProps<Resume.Project>): React.ReactNode {
  const getDesc = (item: Resume.Project): React.ReactNode => (
    <>
      {item.url && (
        <>
          <a href={item.url} key={item.url} target="_blank" rel="noreferrer">
            Preview
          </a>
          <span> - </span>
        </>
      )}

      {item.github && (
        <span key={item.github}>
          <a href={item.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span> - </span>
        </span>
      )}
      <span key="type">{ProjectType[locale][item.type]}</span>
    </>
  )

  const renderItem = (item: Resume.Project): React.ReactNode => {
    return (
      <BaseList.Item key={item.title} style={{ marginBottom: '1rem' }}>
        <BaseList.Item.Meta
          style={{ marginBottom: '.5rem' }}
          title={item.title}
          description={getDesc(item)}
          extra={formatTimeRange({
            start: item.startDate,
            end: item.endDate,
            locale,
          })}
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
      title="Projects"
      dataSource={dataSource.filter(dt => !dt.hide)}
      renderItem={renderItem}
    />
  )
}

export default Projects
