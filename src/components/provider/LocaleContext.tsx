import { createContext } from 'react'

export enum Locale {
  'enUS' = 'enUS',
  'zhCN' = 'zhCN',
}

interface LocaleContext {
  locale: Locale
  changeLocale?: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContext | undefined>(undefined)

LocaleContext.displayName = 'LocaleContext'

export default LocaleContext
