import React from 'react'
import BaseList, { BaseListUL } from '../BaseList'
import LocaleReceiver, { ILocale } from '../provider/LocaleReceiver'

/**
 * TODO: two style,
 * one is emphasize `job title`, another is emphasize the `company`.
 * */
const WorkExperience = ({
  dataSource,
}: Resume.CommonListProps<Resume.Work>): React.FC => {
  const getCompany = (item: Resume.Work): React.ReactChildren => [
    <a href={item.website} key="company" target="_blank" rel="noreferrer">
      {item.company}
    </a>,
    item.location && (
      <span key="location">
        <span key="dash"> - </span>
        {item.location}
      </span>
    ),
  ]

  const renderItem = (locale, item: Resume.Work): React.ReactNode => {
    return (
      <BaseList.Item key={item.company} style={{ marginBottom: '1rem' }}>
        <BaseList.Item.Meta
          style={{ marginBottom: '.5rem' }}
          title={item.position}
          description={getCompany(item)}
          extra={locale?.localeUtil.formatTimeRange({
            start: item.startDate,
            end: item.endDate,
          })}
        />

        <BaseListUL dataSource={item.description} />
      </BaseList.Item>
    )
  }

  return (
    <LocaleReceiver componentName="experience">
      {(locale: ILocale) => (
        <BaseList
          title={locale.title}
          dataSource={dataSource}
          renderItem={renderItem.bind(null, locale)}
        />
      )}
    </LocaleReceiver>
  )
}

export default WorkExperience
