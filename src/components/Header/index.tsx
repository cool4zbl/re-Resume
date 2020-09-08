import React from 'react'
import Heading from '../Heading'
import styles from './index.less'

interface HeaderProps {
  basics: Resume['basics']
}

export default function Header(props: HeaderProps): React.ReactNode {
  const { basics } = props
  const { name, label, picture, summary: desc, website, url } = basics

  const BigName = (): JSX.Element => (
    <Heading level={1} className={styles.bigName}>
      <div className={styles.headerWrapper}>
        <span className={styles.fancyFont}>{`<${name} />`}</span>
      </div>
    </Heading>
  )

  return (
    <>
      <a href={website} target="_blank" rel="noreferrer">
        <BigName />
      </a>
    </>
  )
}
