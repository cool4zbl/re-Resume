import React from 'react'
import BaseList, { BaseListItem } from '../BaseList'
import LocaleReceiver, { ILocale } from '../provider/LocaleReceiver'

/* TODO: 打印需要 */
// const qrCodeSrc = require('../../assets/zbl_resume_qrcode.png')

export default function Thanks({
  dataSource,
}: Resume.CommonListProps<string>): React.ReactNode {
  return (
    <LocaleReceiver componentName="thanks">
      {(locale: ILocale) => (
        <BaseList
          title={locale.title}
          dataSource={dataSource}
          renderItem={(item): React.ReactNode => (
            <BaseListItem key={item} style={{ marginBottom: '.3rem' }}>
              {item}
            </BaseListItem>
          )}
        >
          {/* <BaseListItem key="image" style={{ marginBottom: '.3rem' }}>
        <img src={qrCodeSrc} width="100" height="100" />
      </BaseListItem> */}
        </BaseList>
      )}
    </LocaleReceiver>
  )
}
