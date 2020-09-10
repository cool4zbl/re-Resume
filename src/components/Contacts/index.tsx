import React from 'react'

interface ContactsProps {
  basics: Resume['basics']
}

export default function Contacts(props: ContactsProps): React.ReactNode {
  const { basics } = props
  const { email, phone, website, location, social } = basics

  return (
    <div>
      <ul>
        <li key="phone">{phone}</li>
        <li>{email}</li>
        <li>{website}</li>
        <li>{location.city}</li>
        {social.map(item => (
          <li key={item.network}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.username}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
