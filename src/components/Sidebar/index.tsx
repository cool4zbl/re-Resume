import React from 'react'
import Contacts from '../Contacts'

const Sidebar = ({ resumeData }: Resume.CommonProps): React.ReactNode => {
  const { basics } = resumeData

  return (
    <>
      <Contacts basics={basics} />
      <div>Education</div>
      <div>Interest || Prototype </div>
      <div>Social</div>
      <div>Thanks & scan qrcode</div>
    </>
  )
}

export default Sidebar
