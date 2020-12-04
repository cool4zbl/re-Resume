import { createContext } from 'react'

interface SiteContext {
  isMobile: boolean
  isPrint: boolean
}

const SiteContext = createContext<SiteContext>({
  isMobile: false,
  isPrint: false,
})

SiteContext.displayName = 'SiteContext'

export default SiteContext
