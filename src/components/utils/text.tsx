import React from 'react'

export const transformText = (textString: string): React.ReactNode => {
  // const codeRegExp = /`(\S+)`/gi
  if (typeof textString !== 'string') {
    textString = String(textString)
  }

  const r = textString
    .replace(/\*{2}(.+?)\*{2}/g, '<b>$1</b>')
    .replace(/\*{1}(.+?)\*{1}/g, '<i>$1</i>')
    .replace(/`(.+?)`/g, '<code>$1</code>')

  return <span dangerouslySetInnerHTML={{ __html: r }} />
}
