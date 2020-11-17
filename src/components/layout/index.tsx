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

// TODO: mv to utils
const CN_LANG_STR = 'lang=zh'
const CN_CLASS = 'cn-mode'
const toggleCNClass = (attach: boolean) => {
  const CNClass = CN_CLASS
  const htmlTag = document.querySelector('html')
  if (attach) {
    htmlTag?.classList.add(CNClass)
    return
  }
  htmlTag?.classList.remove(CNClass)
}

const toggleQueryString = (str: string, isAppended: boolean) => {
  const searchStr = window.location.search

  if (isAppended) {
    if (!searchStr.includes(str)) {
      location.search = `${searchStr}${
        searchStr.includes('=') ? '&' : ''
      }${str}`
    }
    return
  }
  if (searchStr.includes(str)) {
    location.search =
      searchStr.slice(0, searchStr.indexOf(str)) +
      searchStr.slice(searchStr.indexOf(str) + str.length + 1)
  }
}

export default function Layout({ data }: LayoutProps): React.ReactNode {
  console.log('^^^ layout resumeData', data)
  const [locale, setLocale] = React.useState<ILocale>({ ...defaultLocale })

  const resumeData = data[locale.locale]
  const { basics } = resumeData

  const changeLocaleCN = () => {
    setLocale({ ...zh })
    toggleCNClass(true)
    toggleQueryString(CN_LANG_STR, true)
  }
  const changeLocaleDefault = () => {
    setLocale({ ...defaultLocale })
    toggleCNClass(false)
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
    <button className="btn" onClick={() => console.log('OPDF')}>
      PDF
    </button>
  )

  useEffect(() => {
    if (window.location.search.includes(CN_LANG_STR)) {
      setLocale({ ...zh })
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
