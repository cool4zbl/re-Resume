import React from 'react'
import Contacts from '../Contacts'
import Skills from '../Skills'

const Sidebar = ({ resumeData }: Resume.CommonProps): React.ReactNode => {
  const { basics, skills } = resumeData

  return (
    <>
      <Contacts basics={basics} />
      <Skills dataSource={skills} />
      <div>Education</div>
      <div>Interest || Prototype </div>
      <div>Social</div>
      <div>Thanks & scan qrcode</div>
    </>
  )
}

export default Sidebar
