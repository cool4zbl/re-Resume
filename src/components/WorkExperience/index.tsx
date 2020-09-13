import React from 'react'
import BaseList, { BaseListProps } from '../BaseList'

interface WorkExperienceProps extends BaseListProps<Work> {
  dataSource: Work[]
}

const WorkExperience = ({
  dataSource,
}: WorkExperienceProps): React.FC<WorkExperienceProps> => {
  const renderItem = (item: Work): React.ReactNode => {
    return (
      <BaseList.Item
        key={item.company}
        title={<a href={item.website}>{item.company}</a>}
        description={item.position}
      >
        {item.description}
        StartDate: {item.startDate}~ End: {item.endDate}
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
