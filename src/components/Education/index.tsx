import React from 'react'
import BaseList from '../BaseList'
import { formatTimeRange } from '../utils/date'

const Education: React.FC<Resume.CommonListProps<Resume.Education>> = ({
  dataSource = [],
  locale = 'en',
}: EducationProps) => {
  return (
    <BaseList
      dataSource={dataSource}
      title="Education"
      renderItem={(item): React.ReactNode => {
        return (
          <BaseList.Item
            key={item.institution}
            style={{ marginBottom: '.3rem ' }}
          >
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
    >
      <BaseList.Item key="gpa" style={{ marginBottom: '.3rem ' }}>
        <div style={{ fontSize: '0.75rem', color: '#434e5e' }}>GPA: 3.6</div>
      </BaseList.Item>
    </BaseList>
  )
}
export default Education
