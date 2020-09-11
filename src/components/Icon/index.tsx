import React from 'react'
import cls from 'classnames'
import styles from './index.less'

interface IconProps extends React.FC {
  icon: string
  fill?: string
  spin?: boolean
  rotate?: number
  style?: React.CSSProperties
  className?: string
}

// const fontSize = ({ width, height }): string => {
//   const size = width || height
//   return size ? `${size / 16}rem` : '1.25em'
// }

export default function Icon(props: IconProps): React.ReactNode {
  const { icon, className, spin, ...rest } = props
  const svgIcon = require(`!raw-loader!./icons/${icon}.svg`)

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
