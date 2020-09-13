/**
 * @description Heading title
 */
import React from 'react'
import styles from './index.less'

interface HeadingProps {
  level: number
  children: React.ReactNode
  [key: string]: string
}

export default function Heading({
  level = 3,
  children,
  ...props
}: HeadingProps): React.ReactNode {
  // return React.createElement('h1', props, children)
  return React.createElement(
    `h${level}`,
    { className: `h${styles[level]}`, ...props },
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
