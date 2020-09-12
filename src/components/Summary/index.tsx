import React from 'react'

export default function Summary(props) {
  const { summary } = props
  return <section className="summary">{summary}</section>
}
