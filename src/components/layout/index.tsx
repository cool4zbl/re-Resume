import React, { ReactNode } from 'react'
import Head from '../Head'
import styles from './index.less'

interface LayoutProps {
  header?: ReactNode
  footer?: ReactNode
  sidebar?: ReactNode
  children: ReactNode
  resumeData: IResume
  [key: string]: any
}

export default function Layout({
  header,
  footer,
  sidebar,
  children,
  resumeData,
}: LayoutProps): React.ReactNode {
  const { basics } = resumeData
  return (
    <>
      <Head basics={basics} />
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
