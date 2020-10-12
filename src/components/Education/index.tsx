import React from 'react'
import BaseList from '../BaseList'
import LocaleReceiver from '../provider/LocaleReceiver'
import { ILocale } from '../provider/LocaleContext'

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
                  title={
                    locale.studyTitle
                      .replace('$studyType', item.studyType)
                      .replace('$area', item.area)
                    // <>
                    //   {} in {item.area}
                    // </>
                  }
                  description={
                    <a href={item.website} target="_blank" rel="noreferrer">
                      {item.institution}
                    </a>
                  }
                />
                <div style={{ fontSize: '0.75rem', color: '#9e9e9e' }}>
                  {locale?.localeUtil.formatTimeRange({
                    start: item.startDate,
                    end: item.endDate,
                  })}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#434e5e' }}>
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
