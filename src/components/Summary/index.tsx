import React from 'react'
import { SectionHeading } from '../Heading'

interface SummaryProps {
  data: Resume.Basics['summary']
}

export default function Summary(props: SummaryProps): React.ReactNode {
  const { data } = props
  return (
    <div>
      <SectionHeading>Profile</SectionHeading>
      {data}
    </div>
  )
}
