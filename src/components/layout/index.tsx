import React, { ReactNode, useEffect } from 'react'
import Head from '../Head'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Main from '../Main'
import ConfigProvider from '../provider/index'
import LangSwitch from '../LangSwitch'
import { Locale } from '../provider/LocaleContext'
import { ILocale } from '../provider/LocaleReceiver'
import { defaultLocale, zh } from '../intl'
import { toggleClass, toggleQueryString } from '../utils'

import styles from './index.less'

interface LayoutProps {
  header?: ReactNode
  footer?: ReactNode
  sidebar?: ReactNode
  children?: ReactNode
  data: {
    default: Resume.IResume
    [key: string]: Resume.IResume
  }
  [key: string]: any
}

const CN_LANG_STR = 'lang=zh'
const CN_CLASS = 'cn-mode'

export default function Layout({ data }: LayoutProps): React.ReactNode {
  console.log('^^^ layout resumeData', data)
  const [locale, setLocale] = React.useState<ILocale>({ ...defaultLocale })

  const resumeData = data[locale.locale]
  const { basics } = resumeData

  const changeLocaleCN = () => {
    setLocale({ ...zh })
    toggleClass(CN_CLASS, true)
    toggleQueryString(CN_LANG_STR, true)
  }
  const changeLocaleDefault = () => {
    setLocale({ ...defaultLocale })
    toggleClass(CN_CLASS, false)
    toggleQueryString(CN_LANG_STR, false)
  }

  const changeLocale = (localeCode: Locale): void => {
    if (localeCode === Locale.enUS) {
      changeLocaleCN()
      return
    }
    changeLocaleDefault()
  }
  const configProps = {
    changeLocale,
    locale,
  }

  const DownloadBtn = () => (
    <button
      className="btn"
      onClick={() => {
        console.log('OPDF')
      }}
    >
      <a href={`${window.location.host}`}>PDF</a>
    </button>
  )

  useEffect(() => {
    if (window.location.search.includes(CN_LANG_STR)) {
      changeLocaleCN()
    }
  }, [])

  return (
    <>
      <Head basics={basics} />
      <ConfigProvider {...configProps}>
        <div className={styles.wrapper}>
          <div className={styles.toolbar}>
            <LangSwitch {...configProps} />
            <DownloadBtn />
          </div>
          <article className={styles.resumeWrapper}>
            <header className={styles.header}>
              <Header basics={basics} hidePicture />
            </header>
            <div className={styles.contentWrapper}>
              <main className={styles.main}>
                <Main resumeData={resumeData} />
              </main>
              <aside className={styles.sidebar}>
                <Sidebar resumeData={resumeData} />
              </aside>
            </div>
          </article>
          <footer className={styles.footer}>
            <Footer basics={basics} />
          </footer>
        </div>
      </ConfigProvider>
    </>
  )
}
