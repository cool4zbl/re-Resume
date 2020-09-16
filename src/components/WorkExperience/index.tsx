import React from 'react'
import BaseList, { BaseListProps } from '../BaseList'
import styles from './index.less'
import { formatDate } from '../utils/index'

const WorkExperience = ({
  dataSource,
  locale = 'en',
}: BaseListProps<Resume.Work>): React.FC => {
  const renderItem = (item: Resume.Work): React.ReactNode => {
    return (
      <BaseList.Item
        key={item.company}
        title={item.position}
        description={<a href={item.website}>{item.company}</a>}
      >
        <span className={styles.time}>
          {formatDate(item.startDate, locale)} ~{' '}
          {formatDate(item.endDate, locale)}
        </span>
        {item.description}
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
