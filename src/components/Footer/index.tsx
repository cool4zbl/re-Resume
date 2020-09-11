import React from 'react'
import styles from './index.less'
import Icon from '../Icon'

interface FooterProps {
  basics: Resume['basics']
}

export default function Footer(props: FooterProps): React.ReactNode {
  const { name, website } = props.basics

  return (
    <div className={styles.footer}>
      Fake it till you make it. 💪
      <div>
        Made with
        <Icon icon="heart" className="heartbeatIcon" />
        &
        <Icon icon="react" spin />
        by{' '}
        <a href={website} target="_blank" rel="noreferrer">
          {name}
        </a>
      </div>
    </div>
  )
}
