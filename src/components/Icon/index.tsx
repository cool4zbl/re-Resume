import React from 'react'
import cls from 'classnames'
import styles from './index.less'

export type IconProps = {
  icon: string
  fill?: string
  spin?: boolean
  rotate?: number
  style?: React.CSSProperties
  className?: string
  children?: React.ReactNode
}

// const fontSize = ({ width, height }): string => {
//   const size = width || height
//   return size ? `${size / 16}rem` : '1.25em'
// }

function Icon({ icon, className, spin, ...rest }: IconProps): React.ReactNode {
  let svgIcon = null
  try {
    svgIcon = require(`!raw-loader!./icons/${icon}.svg`)
  } catch (e) {
    return null
  }

  const spanCls = cls({
    [styles.svgWrapper]: true,
    [styles[className]]: true,
    [styles.spin]: !!spin,
  })

  return (
    <span
      // className={`${styles.svgWrapper} ${styles[className] || ''}`}
      className={spanCls}
      {...rest}
      dangerouslySetInnerHTML={{ __html: svgIcon }}
    ></span>
  )
}
export default Icon
