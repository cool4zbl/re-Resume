import React from 'react'
import { Lang } from '../provider'

/*
 0. 读入当前 locale 对应的 messages & id
 1. 找到当前 message = messages[id]
 2. 生成 message 对应的 text component
 3. render
*/

interface FormattedMessage {
  lang: Lang
  id: string
  messages: object
}

export default function FormattedMessage() {
  return <div></div>
}
