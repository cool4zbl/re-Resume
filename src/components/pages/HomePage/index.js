import React from 'react'
import {
  PageTemplate,
  Bio,
  Work,
  Skills,
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
  Skills: props => <Skills {...props} />,
  Projects: props => <Projects {...props} />,
  Education: props => <Education {...props} />,
  Prototype: props => <Prototype {...props} />,
  Thanks: props => <Thanks {...props} />,
}

const HomePage = () => {
  return (
    <PageTemplate header={<Header name={Me['Bio'].name} />} footer={<Footer />}>
      {Object.keys(Me).map((k, i) => {
        return React.createElement(componentMap[k], { ...Me[k], key: i })
      })}
    </PageTemplate>
  )
}

export default HomePage
