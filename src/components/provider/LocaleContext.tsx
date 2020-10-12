import { createContext } from 'react'

// TODO:
export enum Lang {
  'en' = 'en',
  'zh' = 'zh',
}

export enum Locale {
  'enUS' = 'enUS',
  'zhCN' = 'zhCN',
}

export interface ILocale {
  locale: Locale
  [key: string]: any
  formatTimeRange?: (obj: object) => string
}

interface LocaleContext {
  locale: Locale
  changeLocale?: (locale: Locale) => void
}

const LocaleContext = createContext<LocaleContext | undefined>(undefined)

LocaleContext.displayName = 'LocaleContext'

export default LocaleContext
