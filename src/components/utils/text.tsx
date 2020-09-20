import React from 'react'

export const transformText = (textString: string): React.ReactNode => {
  const codeRegExp = /`(\S+)`/gi

  if (codeRegExp.test(textString)) {
    return <code>{textString.replace(codeRegExp, '$1')}</code>
  }
  return textString
}
