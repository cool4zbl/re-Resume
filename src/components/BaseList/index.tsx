import React from 'react'
import classnames from 'classnames'
import Heading, { SectionHeading } from '../Heading'
import { transformText } from '../utils'
import LocaleContext, { Locale } from '../provider/LocaleContext'
import styles from './index.less'

// TODO: use global className instead of css module className

interface ListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

interface ListItemMetaProps {
  title?: React.ReactNode
  description?: React.ReactNode
  extra?: React.ReactNode
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const ItemMeta: React.FC<ListItemMetaProps> = ({
  className,
  title,
  description,
  extra,
  ...others
}: ListItemMetaProps) => {
  const metaCls = classnames(styles.meta, className)

  const curLocale = React.useContext(LocaleContext)?.locale
  const descCls = classnames(
    styles.itemDescription,
    curLocale.locale === Locale.zhCN ? '' : 'italic'
  )

  return (
    <div {...others} className={metaCls}>
      {title && <Heading className={styles.itemTitle}>{title}</Heading>}
      {extra && <div className={styles.extra}>{extra}</div>}
      {description && <div className={descCls}>{description}</div>}
    </div>
  )
}

export interface ListItemTypeProps extends React.FC<ListItemProps> {
  Meta: typeof ItemMeta
}

/**
 * HTML structure
 * Item
 *  Meta
 *    Title | Extra
 *    Description
 */
export const BaseListItem: ListItemTypeProps = ({
  className,
  children,
  ...rest
}: ListItemProps) => {
  const itemCls = classnames(styles.item, className)

  return (
    <div {...rest} className={itemCls}>
      {children}
    </div>
  )
}

export interface BaseListProps<T> {
  dataSource?: T[]
  title?: React.ReactNode
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
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
    childrenContent = <div className={cls}>{dataSourceItems}</div>
    // childrenContent = React.Children.map(dataSourceItems, (child) => (
    // ))
  }

  return (
    <section {...rest} className={styles.listWrapper}>
      {title && <SectionHeading>{title}</SectionHeading>}
      <div className={cls}>
        {childrenContent}
        {children}
      </div>
    </section>
  )
}

export interface BaseListULProps<T> {
  dataSource?: T[]
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export function BaseListUL<T>({
  dataSource = [],
  className,
  children,
  ...rest
}: BaseListULProps<T>): React.ReactNode {
  const cls = classnames(className)

  return (
    <ul {...rest} className={cls} style={{ paddingLeft: '2rem' }}>
      {dataSource.map(data => (
        <li key={data} style={{ marginBottom: '.2rem' }}>
          {transformText(data)}
        </li>
      ))}
      {children}
    </ul>
  )
}

BaseList.Item = BaseListItem
BaseList.Item.Meta = ItemMeta

export default BaseList
