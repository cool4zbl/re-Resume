import React from 'react'
import { SectionHeading } from '../Heading'
import LocaleReceiver from '../provider/LocaleReceiver'

interface SummaryProps {
  data: Resume.Basics['summary']
}

export default function Summary(props: SummaryProps): React.ReactNode {
  const { data } = props
  return (
    <LocaleReceiver componentName="profile">
      {locale => (
        <div style={{ padding: '1rem 0' }}>
          <SectionHeading>{locale.title}</SectionHeading>
          {data}
        </div>
      )}
    </LocaleReceiver>
  )
}
