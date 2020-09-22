import React from 'react'
import BaseList from '../BaseList'
import { formatTimeRange } from '../utils/date'

interface EducationProps {
  dataSource: Resume.Education[]
  locale?: 'zh' | 'en'
}

const Education: React.FC<EducationProps> = ({
  dataSource = [],
  locale = 'en',
}: EducationProps) => {
  return (
    <BaseList
      dataSource={dataSource}
      title="Education"
      renderItem={item => {
        return (
          <BaseList.Item>
            <BaseList.Item.Meta
              title={
                <>
                  {item.studyType} in {item.area}
                </>
              }
              description={
                <a href={item.website} target="_blank" rel="noreferrer">
                  {item.institution}
                </a>
              }
            />
            <div style={{ fontSize: '0.75rem', color: '#9e9e9e' }}>
              {formatTimeRange({
                start: item.startDate,
                end: item.endDate,
                locale,
              })}
            </div>
          </BaseList.Item>
        )
      }}
    />
  )
}
export default Education
