import React from 'react'
import BaseList from '../BaseList'
import Icon, { IconProps } from '../Icon'

interface ContactsProps {
  basics: Resume.Basics
}

const contactsIconStyle = {
  marginRight: '8px',
}

const ContactsIcon = ({ style, ...rest }: IconProps): React.FC => {
  return <Icon style={{ ...style, ...contactsIconStyle }} {...rest} />
}
export default function Contacts(props: ContactsProps): React.ReactNode {
  const { basics } = props
  const { email, website, location, social } = basics

  return (
    <div>
      <BaseList title="Contacts">
        <BaseList.Item key="email">
          <ContactsIcon icon="mail" />
          <a href={`mailto:${email}`}>{email}</a>
        </BaseList.Item>
        <BaseList.Item key="website">
          <ContactsIcon icon="link" />
          <a href={website} target="_blank" rel="noreferrer">
            {website}
          </a>
        </BaseList.Item>
        <BaseList.Item key="location">
          <ContactsIcon icon="map-pin" />
          {location}
        </BaseList.Item>
      </BaseList>

      <BaseList
        dataSource={social}
        renderItem={(item: Resume.Social): React.ReactNode => (
          <BaseList.Item key={item.network}>
            <ContactsIcon icon={item.network.toLowerCase()} />
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.username}
            </a>
          </BaseList.Item>
        )}
      ></BaseList>
    </div>
  )
}
