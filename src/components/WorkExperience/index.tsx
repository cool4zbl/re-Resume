import React from 'react'
import BaseList from '../BaseList'
import { transformText, formatTimeRange } from '../utils'

const WorkExperience = ({
  dataSource,
  lang = 'en',
}: Resume.CommonListProps<Resume.Work>): React.FC => {
  const getCompany = (item: Resume.Work): React.ReactChildren => [
    <a href={item.website} key="company" target="_blank" rel="noreferrer">
      {item.company}
    </a>,
    item.location && (
      <span key="location">
        <span key="dash"> - </span>
        {item.location}
      </span>
    ),
  ]

  const renderItem = (item: Resume.Work): React.ReactNode => {
    return (
      <BaseList.Item key={item.company} style={{ marginBottom: '1rem' }}>
        <BaseList.Item.Meta
          style={{ marginBottom: '.5rem' }}
          title={item.position}
          description={getCompany(item)}
          extra={formatTimeRange({
            start: item.startDate,
            end: item.endDate,
            lang,
          })}
        />
        <div>{transformText(item.description)}</div>
      </BaseList.Item>
    )
  }

  return (
    <BaseList
      title="Experience"
      dataSource={dataSource}
      renderItem={renderItem}
    />
  )
}

export default WorkExperience
