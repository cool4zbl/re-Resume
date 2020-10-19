import React from 'react'
import BaseList from '../BaseList'
import LocaleReceiver, { ILocale } from '../provider/LocaleReceiver'

const Education = ({
  dataSource = [],
}: Resume.CommonListProps<Resume.Education>) => {
  return (
    <LocaleReceiver componentName="education">
      {(locale: ILocale) => (
        <BaseList
          dataSource={dataSource}
          title={locale.title}
          renderItem={(item): React.ReactNode => {
            return (
              <BaseList.Item
                key={item.institution}
                style={{ marginBottom: '.3rem ' }}
              >
                <BaseList.Item.Meta
                  title={locale.studyTitle
                    .replace('$studyType', item.studyType)
                    .replace('$area', item.area)}
                  description={
                    <a href={item.website} target="_blank" rel="noreferrer">
                      {item.institution}
                    </a>
                  }
                />
                <div className="small-text time">
                  {locale?.localeUtil.formatTimeRange({
                    start: item.startDate,
                    end: item.endDate,
                  })}
                </div>
                <div className="small-text light-desc">
                  {locale.gpa}: {item.gpa}
                </div>
              </BaseList.Item>
            )
          }}
        ></BaseList>
      )}
    </LocaleReceiver>
  )
}
export default Education
