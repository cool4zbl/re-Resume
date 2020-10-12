import React from 'react'
import Heading from '../Heading'
import styles from './index.less'
// import Switch from '../Switch/index'

interface HeaderProps {
  basics: Resume.Basics
  hidePicture?: boolean
}

export default function Header(props: HeaderProps): React.FC {
  const { basics, hidePicture } = props
  const { name, picture, website } = basics

  const BigName = (): JSX.Element => (
    <a href={website} target="_blank" rel="noreferrer">
      {!hidePicture && (
        <img className={styles.avatar} src={picture} alt={`${name} avatar`} />
      )}
      <Heading level={1} className={styles.bigNameWrapper}>
        <span className={styles.name}>{`<${name} />`}</span>
      </Heading>
    </a>
  )

  return (
    <div className={styles.headerWrapper}>
      <BigName />
    </div>
  )
}
