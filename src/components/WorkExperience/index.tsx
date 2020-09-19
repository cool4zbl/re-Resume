import React from 'react'
import BaseList, { BaseListProps } from '../BaseList'
import { formatDate } from '../utils/index'
// import styles from './index.less'
import { transformText } from '../utils/text'

interface WorkExpProps extends BaseListProps<Resume.Work> {
  locale?: 'en' | 'zh'
}

const WorkExperience = ({
  dataSource,
  locale = 'en',
}: WorkExpProps): React.FC => {
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
          description={<>{getCompany(item)}</>}
          extra={
            <span>
              {formatDate(item.startDate, locale)} ~{' '}
              {formatDate(item.endDate, locale)}
            </span>
          }
        />
        <div>{transformText(item.description)}</div>
      </BaseList.Item>
    )
  }

  return (
    <BaseList
      title="Work Experience"
      dataSource={dataSource}
      renderItem={renderItem}
    />
  )
}

export default WorkExperience
