/**
 * @description entry file with processing local resume `data.json` file
 */

import React from 'react'
import Layout from './layout'
import './common/global.less'
import { Footer } from './components'
import Header from './components/Header'
import Contacts from './components/Contacts'

// TODO: Chinese ver
import data from './resume/data.json'

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

  const Sidebar = () => <Contacts basics={basics} />

  return (
    <Layout
      header={<Header basics={basics} hidePicture />}
      footer={<Footer basics={basics} />}
      sidebar={<Sidebar />}
      resumeData={resumeData}
    ></Layout>
  )
}

export default App
