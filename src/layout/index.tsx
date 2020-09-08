import React from 'react'
import Head from '../components/Head'
import styles from './index.less'

console.log('styles import: ', styles)

interface LayoutProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  resumeData: Resume
  [key: string]: any
}

export default function Layout({
  header,
  footer,
  children,
  resumeData,
}: // ...props,
LayoutProps): React.FC {
  return (
    <>
      <Head {...resumeData} />
      <div className={styles.wrapper}>
        <div className={styles.header}>{header}</div>
        <div className={styles.main}>{children}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </>
  )
}
