import React from 'react'
import Skills from '../Skills'
import Education from '../Education'
import Languages from '../Languages'
import ProtoType from '../Prototype/index'
import Thanks from '../Thanks'

const Sidebar = ({ resumeData }: Resume.CommonProps): React.ReactNode => {
  const { skills, education, languages, prototype, thanks } = resumeData

  return (
    <>
      <Skills dataSource={skills} />
      <Education dataSource={education} />
      <Languages dataSource={languages} />
      <ProtoType dataSource={prototype} />
      <Thanks dataSource={thanks} />
    </>
  )
}

export default Sidebar
