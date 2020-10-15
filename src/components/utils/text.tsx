import React from 'react'

export const transformText = (textString: string): React.ReactNode => {
  // const codeRegExp = /`(\S+)`/gi

  const r = textString
    .replace(/\*{2}(.+?)\*{2}/g, '<strong>$1</strong>')
    .replace(/\*{1}(.+?)\*{1}/g, '<italic>$1</italic>')
    .replace(/`(.+?)`/g, '<code>$1</code>')

  return <span dangerouslySetInnerHTML={{ __html: r }} />
}
