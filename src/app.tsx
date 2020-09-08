/**
 * @description entry file with processing local resume `data.json` file
 */

import React from 'react'
import Layout from './layout'
import Header from './components/Header'
import Footer from './components/Footer'

import data from './resume/data.json'
// TODO: Chinese ver

import './common/global.less'

const App = (): React.ReactNode => {
  let resumeData: Resume = {}
  try {
    resumeData = JSON.parse(JSON.stringify(data))
  } catch (e) {
    throw new Error(
      'Parse data error, plz check the format of your `src/resume/data.json`'
    )
  }

  const { basics } = resumeData

  return (
    <Layout
      header={<Header basics={basics} />}
      footer={<Footer />}
      resumeData={resumeData}
    ></Layout>
  )
}

export default App
