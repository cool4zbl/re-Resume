import React from 'react'
import { Locale, ILocale } from '../provider/LocaleContext'

interface LangSwitchProps {
  locale: ILocale
  changeLocale: (locale: Locale) => void
}

export default function LangSwitch({ locale, changeLocale }: LangSwitchProps) {
  return (
    <button
      className="btn"
      value={locale.locale}
      onClick={(e: Event) => changeLocale(e.target.value)}
    >
      {locale.locale === Locale.enUS ? '中文' : 'English'}
    </button>
  )
}
