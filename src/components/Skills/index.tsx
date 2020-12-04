import React from 'react'
import BaseList, { BaseListProps, BaseListUL } from '../BaseList'
import LocaleReceiver, { ILocale } from '../provider/LocaleReceiver'

const Skills = ({ dataSource }: BaseListProps<Resume.Skill>) => {
  const renderItem = (item: Resume.Skill): React.ReactNode => {
    return (
      <BaseList.Item key={item.name}>
        <BaseList.Item.Meta title={item.name} />
        <BaseListUL style={{ paddingLeft: 0 }} dataSource={item.keywords} />
      </BaseList.Item>
    )
  }
  return (
    <LocaleReceiver componentName="skills">
      {(locale: ILocale) => (
        <BaseList
          title={locale.title}
          dataSource={dataSource}
          renderItem={renderItem}
        />
      )}
    </LocaleReceiver>
  )
}

export default Skills
