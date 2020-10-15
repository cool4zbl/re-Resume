import React from 'react'
import BaseList, { BaseListItem } from '../BaseList'
import LocaleReceiver from '../provider/LocaleReceiver'
import { ILocale } from '../provider/LocaleReceiver'

/*
 * __proto__, the true me.
 */
export default function ProtoType({
  dataSource = [],
}: Resume.CommonListProps<Resume.ProtoType>): React.FC {
  const currentDataSource = dataSource.find(
    dt => dt.name.toLowerCase() === 'hobbies'
  )?.description

  return (
    <LocaleReceiver componentName="prototype">
      {(locale: ILocale) => (
        <BaseList
          dataSource={currentDataSource}
          title={locale.title}
          renderItem={(item): React.ReactNode => {
            return (
              <BaseListItem key={item} style={{ marginBottom: '.3rem' }}>
                {item}
              </BaseListItem>
            )
          }}
        />
      )}
    </LocaleReceiver>
  )
}
