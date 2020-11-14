import React from 'react'
import LocaleReceiver from '../provider/LocaleReceiver'
import BaseList from '../BaseList'

interface SummaryProps {
  data: Resume.Basics['summary']
}

export default function Summary(props: SummaryProps): React.ReactNode {
  const { data } = props

  const renderItem = (
    locale,
    item: Resume.Basics['summary']
  ): React.ReactNode => {
    return <BaseList.Item key={item}>{item}</BaseList.Item>
  }

  return (
    <LocaleReceiver componentName="profile">
      {locale => (
        <BaseList
          title={locale.title}
          dataSource={Array.isArray(data) ? data : [data]}
          renderItem={renderItem.bind(null, locale)}
        />
      )}
    </LocaleReceiver>
  )
}
