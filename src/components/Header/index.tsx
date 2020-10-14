import React from 'react'
import Heading from '../Heading'
import Contacts from '../Contacts'
import styles from './index.less'

interface HeaderProps {
  basics: Resume.Basics
  hidePicture?: boolean
}

export default function Header(props: HeaderProps): React.FC {
  const { basics, hidePicture } = props
  const { name, picture, website, title } = basics

  // const BigName = (): JSX.Element => (
  //   <a href={website} target="_blank" rel="noreferrer">
  //     {!hidePicture && (
  //       <img className={styles.avatar} src={picture} alt={`${name} avatar`} />
  //     )}
  //     <Heading level={1} className={styles.bigNameWrapper}>
  //       <span className={styles.name}>{`<${name} />`}</span>
  //     </Heading>
  //   </a>
  // )

  const Header = () => {
    return (
      <>
        <div className={styles.information}>
          {hidePicture && (
            <img
              className={styles.avatar}
              src={picture}
              alt={`${name} avatar`}
            />
          )}
          <div className={styles.primary}>
            <a href={website} target="_blank" rel="noreferrer">
              <Heading level={1} className={styles.name}>
                {`<${name} />`}
              </Heading>
            </a>
            <div className={styles.title}>{title}</div>
          </div>
          {/* <div className={styles.secondary}> </div> */}
        </div>

        <div className={styles.contacts}>
          <Contacts basics={basics} />
        </div>
      </>
    )
  }

  return (
    <div className={styles.headerWrapper}>
      {/* <BigName /> */}
      <Header />
    </div>
  )
}
