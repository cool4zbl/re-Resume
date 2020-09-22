import React from 'react'
import BaseList, { BaseListItem } from '../BaseList'

const qrCodeSrc = require('../../assets/zbl_resume_qrcode.png')

export default function Thanks({
  dataSource,
}: // locale = 'en',
Resume.CommonListProps<string>): React.ReactNode {
  return (
    <BaseList
      title="thanks"
      dataSource={dataSource}
      renderItem={(item): React.ReactNode => {
        return (
          <>
            <BaseListItem key={item} style={{ marginBottom: '.3rem' }}>
              {item}
            </BaseListItem>
            <BaseListItem key="image" style={{ marginBottom: '.3rem' }}>
              {/* TODO: 手机打开不需要显示 */}
              <img src={qrCodeSrc} width="100" height="100" />
            </BaseListItem>
          </>
        )
      }}
    />
  )
}
