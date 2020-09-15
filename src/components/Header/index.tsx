import React from 'react'
import Heading from '../Heading'
import styles from './index.less'

interface HeaderProps {
  basics: Resume.Basics
  hidePicture?: boolean
}

export default function Header(props: HeaderProps): React.FC {
  const { basics, hidePicture } = props
  const { name, picture, website } = basics

  const BigName = (): JSX.Element => (
    <Heading level={1} className={styles.bigNameWrapper}>
      <span className={styles.name}>{`<${name} />`}</span>
    </Heading>
  )

  return (
    <div className={styles.headerWrapper}>
      <a href={website} target="_blank" rel="noreferrer">
        {!hidePicture && (
          <img className={styles.avatar} src={picture} alt={`${name} avatar`} />
        )}
        <BigName />
      </a>
      {/* <div>{label}</div> */}
    </div>
  )
}
