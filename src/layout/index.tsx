import React from 'react'
import { Head } from '../components'
import styles from './index.less'

console.log('styles import: ', styles)

interface LayoutProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  sidebar?: React.ReactNode
  children: React.ReactNode
  resumeData: Resume
  [key: string]: any
}

export default function Layout({
  header,
  footer,
  sidebar,
  children,
  resumeData,
}: // ...props,
LayoutProps): React.FC {
  return (
    <>
      <Head {...resumeData} />
      <div className={styles.wrapper}>
        <header className={styles.header}>{header}</header>
        <div className={styles.contentWrapper}>
          <section className={styles.main}>
            测试 main
            {children}
          </section>
          <div className={styles.sidebar}>{sidebar}</div>
        </div>
        <footer className={styles.footer}>{footer}</footer>
      </div>
    </>
  )
}
