/**
 * @description entry file with processing local resume `data.json` file
 */

import React from 'react'
import Layout from './components/layout'
import { Footer } from './components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './components/Main'

// TODO: Chinese ver
import rawData from './resume/data.json'

let resumeData: Resume = {}
try {
  resumeData = JSON.parse(JSON.stringify(rawData))
} catch (e) {
  throw new Error(
    'Parse data error, plz check the format of your `src/resume/data.json`'
  )
}

const App = (): React.ReactNode => {
  const { basics } = resumeData
  console.log('=== App resumeData', resumeData)

  return (
    <Layout
      header={<Header basics={basics} hidePicture />}
      footer={<Footer basics={basics} />}
      sidebar={<Sidebar resumeData={resumeData} />}
      // resumeData={resumeData}
    >
      <Main resumeData={resumeData} />
    </Layout>
  )
}

export default App
