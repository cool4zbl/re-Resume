import React from 'react'
import BaseList from '../BaseList'
import { transformText } from '../utils'
import LocaleReceiver, { ILocale } from '../provider/LocaleReceiver'

enum ProjectTypeText {
  '0' = 'business',
  '1' = 'open',
}

function Projects({
  dataSource,
}: Resume.CommonListProps<Resume.Project>): React.ReactNode {
  const getDesc = (item: Resume.Project, locale: ILocale): React.ReactNode => (
    <>
      <span key="type">{locale[ProjectTypeText[item.type]]}</span>
      {item.url && (
        <>
          <span> - </span>
          <a href={item.url} key={item.url} target="_blank" rel="noreferrer">
            {locale.preview}
          </a>
        </>
      )}

      {item.github && (
        <span key={item.github}>
          <span> - </span>
          <a href={item.github} target="_blank" rel="noreferrer">
            {locale.github}
          </a>
        </span>
      )}
    </>
  )

  const renderItem = (locale, item: Resume.Project): React.ReactNode => {
    return (
      <BaseList.Item key={item.title} style={{ marginBottom: '1rem' }}>
        <BaseList.Item.Meta
          style={{ marginBottom: '.5rem' }}
          title={item.title}
          description={getDesc(item, locale)}
          extra={locale?.localeUtil.formatTimeRange({
            start: item.startDate,
            end: item.endDate,
          })}
        />
        <div>{transformText(item.description)}</div>
        <div>
          {item.highlights.map(high => (
            <p key={high}>{transformText(high)}</p>
          ))}
        </div>
      </BaseList.Item>
    )
  }

  return (
    <LocaleReceiver componentName="projects">
      {(locale: ILocale) => (
        <BaseList
          title={locale.title}
          dataSource={dataSource.filter(dt => !dt.hide)}
          renderItem={renderItem.bind(null, locale)}
        />
      )}
    </LocaleReceiver>
  )
}

export default Projects
