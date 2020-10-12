import React from 'react'
import { Locale, ILocale } from '../provider/LocaleContext'
import styles from './index.less'

interface LangSwitchProps {
  locale: ILocale
  changeLocale: (locale: Locale) => void
}

export default function LangSwitch({ locale, changeLocale }: LangSwitchProps) {
  return (
    <button
      className={styles.btn}
      value={locale.locale}
      onClick={(e: Event) => changeLocale(e.target.value)}
    >
      {locale.locale === Locale.enUS ? '中文' : 'English'}
    </button>
  )
}
