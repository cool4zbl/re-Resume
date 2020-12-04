import React from 'react'
import Icon from '../Icon'

interface FooterProps {
  basics: Resume['basics']
}

export default function Footer(props: FooterProps): React.ReactNode {
  const { website } = props.basics

  return (
    <div>
      Fake it till you make it. 💪
      <div>
        Made with
        <Icon icon="heart" className="heartbeatIcon" />
        &
        <Icon icon="react" spin />
        by{' '}
        <a href={website} target="_blank" rel="noreferrer">
          ZBL
        </a>
      </div>
    </div>
  )
}
