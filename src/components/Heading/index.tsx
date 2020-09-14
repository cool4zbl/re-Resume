/**
 * @description Heading title
 */
import React from 'react'
import classnames from 'classnames'
import styles from './index.less'

interface HeadingProps {
  level: number
  children: React.ReactNode
  className: string
  [key: string]: string
}

export default function Heading({
  level = 3,
  children,
  className,
  ...props
}: HeadingProps): React.ReactNode {
  const cls = classnames(styles[`h${level}`], className)
  // return React.createElement('h1', props, children)
  return React.createElement(
    `h${level}`,
    { className: cls, ...props },
    children
  )
}

const SectionHeading = ({
  level = 2,
  children,
}: HeadingProps): React.ReactNode => {
  return (
    <Heading level={level} className={styles.sectionHeading}>
      {children}
    </Heading>
  )
}

export { SectionHeading }
