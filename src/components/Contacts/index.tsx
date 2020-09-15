import React from 'react'
import BaseList from '../BaseList'

interface ContactsProps {
  basics: Resume.Basics
}

export default function Contacts(props: ContactsProps): React.ReactNode {
  const { basics } = props
  const { email, phone, website, location, social } = basics
  const { city } = location

  const contacts = [email, phone, website, city]

  return (
    <div>
      <BaseList
        dataSource={contacts}
        title="Contacts"
        renderItem={item => <BaseList.Item key={item}>{item}</BaseList.Item>}
      ></BaseList>

      <BaseList
        dataSource={social}
        renderItem={item => (
          <BaseList.Item key={item.network}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.username}
            </a>
          </BaseList.Item>
        )}
      ></BaseList>
    </div>
  )
}
