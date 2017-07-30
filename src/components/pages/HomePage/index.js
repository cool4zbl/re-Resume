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
  Bio: props => <Bio {...props} />,
  Work: props => <Work {...props} />,
  Projects: props => <Projects {...props} />,
  Education: props => <Education {...props} />,
  Prototype: props => <Prototype {...props} />,
  Thanks: props => <Thanks {...props} />,
}

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      {Object.keys(Me).map((k, i) => {
        const component = componentMap[k]
        const props = { ...Me[k], key: i }
        return React.createElement(component, props)
      })}
    </PageTemplate>
  )
}

export default HomePage
