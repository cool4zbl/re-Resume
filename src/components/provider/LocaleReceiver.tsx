import React, { useContext } from 'react'
import LocaleContext from './LocaleContext'
import defaultLocaleData from '../intl/default'
import { formatTimeRange } from '../utils/date'

export interface ILocale {
  locale: Locale
  [key: string]: any
  localeUtils: {
    [key: string]: any
    formatTimeRange?: (obj: object) => string
  }
}

export interface LocaleReceiverProps {
  componentName?: string
  defaultLocale?: object | Function
  children: (
    locale: object,
    localeCode?: string,
    fullLocale?: object
  ) => React.ReactNode
}

export interface LocaleInterface {
  [key: string]: any
}

export interface LocaleReceiverContext {
  locale?: ILocale
}

export default function LocaleReceiver({
  componentName = 'global',
  defaultLocale,
  children,
}: LocaleReceiverProps) {
  const curLocale = useContext(LocaleContext)?.locale

  const localeUtil = {
    formatTimeRange: args =>
      formatTimeRange({
        ...args,
        locale: curLocale.locale,
      }),
  }

  const getLocale = () => {
    const locale: object | Function =
      defaultLocale ||
      (defaultLocaleData as LocaleInterface)[componentName || 'global']
    const localeFromContext =
      componentName && curLocale ? curLocale[componentName] : {}

    return {
      ...(typeof locale === 'function' ? locale() : locale),
      ...(localeFromContext || {}),
      localeUtil,
    }
  }

  const getLocaleCode = () => {
    const localeCode =
      (curLocale && curLocale.locale) || defaultLocaleData.locale
    return localeCode
  }

  return children(getLocale(), getLocaleCode(), curLocale)
}
