import React, { ReactNode } from 'react'
import Head from '../Head'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Main from '../Main'
import ConfigProvider from '../provider/index'
import LangSwitch from '../LangSwitch'
import { Locale, ILocale } from '../provider/LocaleContext'
import { defaultLocale, zh } from '../intl'

import styles from './index.less'

interface LayoutProps {
  header?: ReactNode
  footer?: ReactNode
  sidebar?: ReactNode
  children: ReactNode
  data: {
    default: Resume.IResume
    [key: string]: Resume.IResume
  }
  [key: string]: any
}

export default function Layout({ data }: LayoutProps): React.ReactNode {
  console.log('^^^ layout resumeData', data)
  const [locale, setLocale] = React.useState<ILocale>({ ...defaultLocale })

  const resumeData = data[locale.locale]
  const { basics } = resumeData

  const changeLocale = (localeCode: Locale): void => {
    if (localeCode === Locale.enUS) {
      setLocale({ ...zh })
      return
    }
    setLocale({ ...defaultLocale })
  }

  const configProps = {
    changeLocale,
    locale,
  }

  return (
    <>
      <Head basics={basics} />
      <ConfigProvider {...configProps}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <Header basics={basics} hidePicture />
          </header>
          <div className={styles.toolbar}>
            <LangSwitch {...configProps} />
          </div>
          <div className={styles.contentWrapper}>
            <main className={styles.main}>
              <Main resumeData={resumeData} />
            </main>
            <aside className={styles.sidebar}>
              <Sidebar resumeData={resumeData} />
            </aside>
          </div>
          <footer className={styles.footer}>
            <Footer basics={basics} />
          </footer>
        </div>
      </ConfigProvider>
    </>
  )
}
