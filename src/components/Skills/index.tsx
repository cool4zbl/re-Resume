import React from 'react'
import BaseList from '../BaseList'
import { BaseListProps } from '../BaseList/index'
import LocaleReceiver, { ILocale } from '../provider/LocaleReceiver'

const Skills = ({ dataSource }: BaseListProps<Resume.Skill>) => {
  const renderItem = (item: Resume.Skill): React.ReactNode => {
    return (
      <BaseList.Item key={item.name} style={{ marginBottom: '.5rem' }}>
        <BaseList.Item.Meta title={item.name} />
        {item.keywords.map(word => (
          <p key={word}>{word}</p>
        ))}
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
