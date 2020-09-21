import React from 'react'

export const transformText = (textString: string): React.ReactNode => {
  // const codeRegExp = /`(\S+)`/gi

  const r = textString
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\*{1}(.+?)\*{1}/g, '<italic>$1</italic>')
    .replace(/\*{2}(.+?)\*{2}/g, '<strong>$1</strong>')

  return <span dangerouslySetInnerHTML={{ __html: r }} />
}
