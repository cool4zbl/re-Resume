import React from 'react'
import BaseList from '../BaseList'
import { BaseListProps } from '../BaseList/index'

interface SkillsProps extends BaseListProps<Resume.Skill> {
  lang?: 'en' | 'zh'
}

const Skills = ({
  dataSource,
}: // lang = 'en'
SkillsProps): React.FC<SkillsProps> => {
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
    <BaseList
      title="skills"
      dataSource={dataSource}
      renderItem={renderItem}
    ></BaseList>
  )
}

export default Skills
