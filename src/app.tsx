/**
 * @description entry file with processing local resume `data.json` file
 */

import React from 'react'
import Layout from './components/layout'

import rawData from '../data/data.json'
import zhRawData from '../data/data_zh.json'
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
