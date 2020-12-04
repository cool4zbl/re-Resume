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
export default function Contacts({ basics }: ContactsProps): React.ReactNode {
  const { email, phone, location, social } = basics

  const dataSource = [
    {
      network: 'mail',
      url: `mailto:${email}`,
      username: email,
    },
    {
      network: 'phone',
      username: phone,
    },
    // {
    //   network: 'link',
    //   url: website,
    //   username: website,
    // },
    {
      network: 'map-pin',
      username: location,
    },
    ...social,
  ]

  return (
    <BaseList
      dataSource={dataSource}
      renderItem={(item: Resume.Social): React.ReactNode => (
        <BaseList.Item key={item.network} style={{ marginBottom: '.2rem' }}>
          <ContactsIcon icon={item.network.toLowerCase()} />
          {item.url ? (
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.username}
            </a>
          ) : (
            item.username
          )}
        </BaseList.Item>
      )}
    />
  )
}
