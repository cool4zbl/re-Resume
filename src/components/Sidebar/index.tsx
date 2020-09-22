import React from 'react'
import Contacts from '../Contacts'
import Skills from '../Skills'
import Education from '../Education'
import Languages from '../Languages'
import ProtoType from '../Prototype/index'

const Sidebar = ({ resumeData }: Resume.CommonProps): React.ReactNode => {
  const { basics, skills, education, languages, prototype } = resumeData

  return (
    <>
      <Contacts basics={basics} />
      <Skills dataSource={skills} />
      <Education dataSource={education} />
      <Languages dataSource={languages} />
      <ProtoType dataSource={prototype} />
      <div>Thanks & scan qrcode</div>
    </>
  )
}

export default Sidebar
