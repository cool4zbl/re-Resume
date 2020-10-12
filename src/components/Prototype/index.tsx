import React from 'react'
import BaseList, { BaseListItem } from '../BaseList'

/*
 * __proto__, the true me.
 */
export default function ProtoType({
  dataSource = [],
}: // lang = 'en',
Resume.CommonListProps<Resume.ProtoType>): React.FC {
  const currentDataSource = dataSource.find(
    dt => dt.name.toLowerCase() === 'hobbies'
  )?.description

  return (
    <BaseList
      dataSource={currentDataSource}
      title="prototype"
      renderItem={(item): React.ReactNode => {
        return (
          <BaseListItem key={item} style={{ marginBottom: '.3rem' }}>
            {item}
          </BaseListItem>
        )
      }}
    ></BaseList>
  )
}
