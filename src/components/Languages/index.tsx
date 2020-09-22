import React from 'react'
import BaseList, { BaseListItem, ItemMeta } from '../BaseList'

export default function Languages({
  dataSource = [],
}: // locale = 'en',
Resume.CommonListProps<Resume.Language>): React.FC {
  return (
    <BaseList
      dataSource={dataSource}
      title="languages"
      renderItem={(item): React.ReactNode => {
        return (
          <BaseListItem key={item.language}>
            <ItemMeta
              style={{ marginBottom: '.3rem' }}
              title={item.language}
              extra={item.fluency}
            />
          </BaseListItem>
        )
      }}
    ></BaseList>
  )
}
