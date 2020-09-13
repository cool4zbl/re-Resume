import React from 'react'
import classnames from 'classnames'
import Heading, { SectionHeading } from '../Heading'
import styles from './index.less'

interface BaseListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode
  description?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const BaseListItem = ({
  title,
  description,
  className,
  children,
  ...rest
}: BaseListItemProps): React.FC<BaseListItemProps> => {
  const itemCls = classnames(styles.item, className)

  return (
    <li {...rest} className={itemCls}>
      {title && <Heading className={styles.itemTitle}>{title}</Heading>}
      {description && (
        <div className={styles.itemDescription}>{description}</div>
      )}
      {children}
    </li>
  )
}

export interface BaseListProps<T> {
  dataSource: T[]
  title: React.ReactNode
  className?: string
  children?: React.ReactNode
  renderItem: (item: T, index?: number) => React.ReactNode
}

function BaseList<T>({
  dataSource = [],
  title,
  renderItem,
  className,
  children,
  ...rest
}: BaseListProps<T>): React.ReactNode {
  const cls = classnames(styles.list, className)

  let childrenContent = null
  if (typeof renderItem === 'function') {
    const dataSourceItems = dataSource.map((ds, index) => renderItem(ds, index))
    childrenContent = <ul className={cls}>{dataSourceItems}</ul>
    // childrenContent = React.Children.map(dataSourceItems, (child) => (
    // ))
  }

  return (
    <>
      <SectionHeading>{title}</SectionHeading>
      <div className={cls} {...rest}>
        {childrenContent}
        {children}
      </div>
    </>
  )
}

BaseList.Item = BaseListItem

export default BaseList
