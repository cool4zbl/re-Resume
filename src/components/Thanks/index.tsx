import React from 'react'
import BaseList, { BaseListItem } from '../BaseList'

/* TODO: 手机打开不需要显示 */
const qrCodeSrc = require('../../assets/zbl_resume_qrcode.png')

export default function Thanks({
  dataSource,
}: // lang = 'en',
Resume.CommonListProps<string>): React.ReactNode {
  return (
    <BaseList
      title="thanks"
      dataSource={dataSource}
      renderItem={(item): React.ReactNode => {
        return (
          <BaseListItem key={item} style={{ marginBottom: '.3rem' }}>
            {item}
          </BaseListItem>
        )
      }}
    >
      <BaseListItem key="image" style={{ marginBottom: '.3rem' }}>
        <img src={qrCodeSrc} width="100" height="100" />
      </BaseListItem>
    </BaseList>
  )
}
