/**
 * @description entry file with processing local resume `data.json` file
 */

import React from 'react'
import Layout from './components/layout'

import rawData from './resume/data.json'
import zhRawData from './resume/data_zh.json'
import { Locale } from './components/provider/LocaleContext'

const App = (): React.ReactNode => {
  return (
    <Layout
      data={{
        default: rawData,
        [Locale.enUS]: rawData,
        [Locale.zhCN]: zhRawData,
      }}
    />
  )
}

export default App
