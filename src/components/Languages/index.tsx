import React from 'react'
import BaseList, { BaseListItem, ItemMeta } from '../BaseList'
import LocaleReceiver, { ILocale } from '../provider/LocaleReceiver'

export default function Languages({
  dataSource = [],
}: Resume.CommonListProps<Resume.Language>): React.FC {
  return (
    <LocaleReceiver componentName="languages">
      {(locale: ILocale) => (
        <BaseList
          dataSource={dataSource}
          title={locale.title}
          renderItem={(item): React.ReactNode => (
            <BaseListItem key={item.language}>
              <ItemMeta
                style={{ marginBottom: '.3rem' }}
                title={item.language}
                extra={item.fluency}
              />
            </BaseListItem>
          )}
        />
      )}
    </LocaleReceiver>
  )
}
