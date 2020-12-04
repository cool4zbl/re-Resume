import React from 'react'
import {
  PageTemplate,
  Articles,
  Bio,
  Work,
  Skills,
  Projects,
  Education,
  Prototype,
  SocialMedia,
  Thanks,
  Header,
  Footer,
} from 'components'
import Me from '../../../Me/'

const componentMap = {
  Bio: props => <Bio {...props} />,
  Work: props => <Work {...props} />,
  Skills: props => <Skills {...props} />,
  Projects: props => <Projects {...props} />,
  Articles: props => <Articles {...props} />,
  Education: props => <Education {...props} />,
  SocialMedia: props => <SocialMedia {...props} />,
  Prototype: props => <Prototype {...props} />,
  Thanks: props => <Thanks {...props} />,
}

const HomePage = () => {
  return (
    <PageTemplate header={<Header name={Me.Bio.name} />} footer={<Footer />}>
      {Object.keys(Me).map(k =>
        React.createElement(componentMap[k], { ...Me[k], key: k })
      )}
    </PageTemplate>
  )
}

export default HomePage
