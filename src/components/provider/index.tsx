// all providers, including `locale` & `site`

import React from 'react'
import SiteContext from './SiteContext'
import LocaleContext, { Lang, Locale } from './LocaleContext'
import LocaleReceiver from './LocaleReceiver'
import defaultLocale from '../intl/default'

interface ConfigProviderProps {
  lang?: Lang
  isMobile?: false
  isPrint?: false
  children?: React.ReactNode
  locale?: ILocale
  changeLocale: (locale: Locale) => void
  componentName?: string
}

function ConfigProvider({
  children,
  locale = defaultLocale,
  componentName = 'global',
}: ConfigProviderProps) {
  // const [isMobile, setIsMobile] = useState(false)
  // const RESPONSIBLE_WIDTH = 768
  // const updateMobileMode = (): void => {
  //   const currentIsMobile = window.innerWidth < RESPONSIBLE_WIDTH
  //   if (currentIsMobile !== isMobile) {
  //     setIsMobile(currentIsMobile)
  //   }
  // }

  // useEffect(() => {
  //   updateMobileMode()
  //   window.addEventListener('resize', updateMobileMode)

  //   return (): void => {
  //     window.removeEventListener('resize', updateMobileMode)
  //   }
  // }, [])

  /**
   * render all providers
   * @param context SiteContext { isMobile, isPrint }
   * @param curLocale Locale
   */
  const renderProvider = (context, curLocale) => {
    const config = {
      ...context,
      locale: curLocale,
    }

    return (
      <SiteContext.Provider value={config}>
        <LocaleContext.Provider value={{ locale: curLocale }}>
          {children}
        </LocaleContext.Provider>
      </SiteContext.Provider>
    )
  }

  return (
    <LocaleReceiver locale={locale} componentName={componentName}>
      {() => (
        <SiteContext.Consumer>
          {context => {
            return renderProvider(context, locale)
          }}
        </SiteContext.Consumer>
      )}
    </LocaleReceiver>
  )
}

ConfigProvider.ConfigContext = SiteContext

export default ConfigProvider
