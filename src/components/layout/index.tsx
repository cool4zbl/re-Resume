import React, { ReactNode } from 'react'
import { Head } from '..'
import styles from './index.less'

console.log('styles import: ', styles)

interface LayoutProps {
  header?: ReactNode
  footer?: ReactNode
  sidebar?: ReactNode
  children: ReactNode
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
          <section className={styles.main}>{children}</section>
          <aside className={styles.sidebar}>{sidebar}</aside>
        </div>
        <footer className={styles.footer}>{footer}</footer>
      </div>
    </>
  )
}
