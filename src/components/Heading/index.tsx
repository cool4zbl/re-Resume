import React from 'react'
import styles from './index.less'

console.log('heading styles', styles)

interface IHeading {
  level: number
  children: React.ReactNode
  [key: string]: string
}

export default function Heading({
  level,
  children,
  ...props
}: IHeading): React.ReactNode {
  // return React.createElement('h1', props, children)
  return React.createElement(
    `h${level}`,
    { className: `h${styles[level]}`, ...props },
    children
  )
}
