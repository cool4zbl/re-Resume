// Page Content
import React from 'react'
import {
  PageTemplate,
  Bio,
  Work,
  Projects,
  Education,
  Header,
  Footer,
  Heading,
  InfoSection,
} from 'components'
import Me from '../../../Me/index.js'
const componentMap = {
  Bio: () => <Bio />,
  Work: () => { <Work /> },
  Projects: () => { <Projects /> },
  Education: () => { <Education /> },
}


const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Bio {...Me['Bio']} />
      <Work {...Me['Work']} />
      <Projects {...Me['Projects']} />
      <Education {...Me['Education']} />

      {/*
        Object.keys(Me).map((k, i) =>
        <div key={i}>
          <h2>{k}</h2>
          <div>{ Me[k] }</div>
        </div>
      )
      */}
    </PageTemplate>
  )
}

export default HomePage
