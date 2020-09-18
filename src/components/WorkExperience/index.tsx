import React from 'react'
import BaseList, { BaseListProps } from '../BaseList'
import styles from './index.less'
import { formatDate } from '../utils/index'

const WorkExperience = ({
  dataSource,
  locale = 'en',
}: BaseListProps<Resume.Work>): React.FC => {
  const getCompany = (item: Resume.Work): React.ReactChildren => [
    item.company,
    location && <span>, {item.location}</span>,
  ]

  const renderItem = (item: Resume.Work): React.ReactNode => {
    return (
      <BaseList.Item key={item.company} style={{ marginBottom: '1.25rem' }}>
        <BaseList.Item.Meta
          style={{ marginBottom: '.5rem' }}
          title={item.position}
          // description={<a href={item.website}>{item.company}</a>}
          description={<a href={item.website}>{getCompany(item)}</a>}
          extra={
            <span className={styles.time}>
              {formatDate(item.startDate, locale)} ~{' '}
              {formatDate(item.endDate, locale)}
            </span>
          }
        />
        <div className={styles.desc}>{item.description}</div>
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
