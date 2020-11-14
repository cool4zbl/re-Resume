import React from 'react'
import BaseList, { BaseListProps } from '../BaseList'
import LocaleReceiver, { ILocale } from '../provider/LocaleReceiver'

const Skills = ({ dataSource }: BaseListProps<Resume.Skill>) => {
  const renderItem = (item: Resume.Skill): React.ReactNode => {
    return (
      <BaseList.Item key={item.name}>
        <BaseList.Item.Meta title={item.name} />
        <ul className="small-text" style={{ listStyle: 'none' }}>
          {item.keywords.map(word => (
            <li key={word} style={{ marginBottom: '.2rem' }}>
              {word}
            </li>
          ))}
        </ul>
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
