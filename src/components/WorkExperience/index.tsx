import React from 'react'
import BaseList from '../BaseList'
import { transformText, formatTimeRange } from '../utils'

const WorkExperience = ({
  dataSource,
  locale = 'en',
}: Resume.CommonListProps<Resume.Work>): React.FC => {
  const getCompany = (item: Resume.Work): React.ReactChildren => [
    <a href={item.website} key="company">
      <span>{item.company}</span>
    </a>,
    location && <span key="location"> - {item.location}</span>,
  ]

  const renderItem = (item: Resume.Work): React.ReactNode => {
    return (
      <BaseList.Item key={item.company} style={{ marginBottom: '1rem' }}>
        <BaseList.Item.Meta
          style={{ marginBottom: '.5rem' }}
          title={item.position}
          description={getCompany(item)}
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
