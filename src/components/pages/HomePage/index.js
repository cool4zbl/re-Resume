import React from 'react'
import {
  PageTemplate,
  Bio,
  Work,
  Projects,
  Education,
  Prototype,
  Thanks,
  Header,
  Footer,
} from 'components'
import Me from '../../../Me/index.js'
const componentMap = {
  Bio: () => <Bio />,
  Work: () => <Work />,
  Projects: () => <Projects />,
  Education: () => <Education />,
  Prototype: () => <Prototype />,
  Thanks: () => <Thanks />,
}

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Bio {...Me['Bio']} />
      <Work {...Me['Work']} />
      <Projects {...Me['Projects']} />
      <Education {...Me['Education']} />
      <Prototype {...Me['Prototype']} />
      <Thanks {...Me['Thanks']} />

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
