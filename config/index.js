const path = require('path')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')

const langs = ['enUS', 'zhCN']

/**
 * resume website url to generate PDF
 */
const URL = `http://${host}:${port}${publicPath || ''}`.replace('//', '/')
const url = lang => `${URL}?${lang === 'zhCN' ? 'lang=zh' : ''}`
/**
 * resume file saving
 */
const downloadDir =
  process.env.NODE_ENV === 'production'
    ? '/resume'
    : path.join(__dirname, '../download')

const downloadFilePath = lang =>
  `${downloadDir}/zhangbinliu_resume${lang === 'zhCN' ? `_${lang}` : ''}.pdf`

const downloads = (() =>
  langs.reduce((acc, cur) => {
    if (!acc[cur]) {
      acc = {
        ...acc,
        [cur]: {
          filePath: downloadFilePath(cur),
          url: url(cur),
        },
      }
    }
    return acc
  }, {}))()

module.exports = {
  host,
  port,
  publicPath,
  downloadDir,
  downloads,
}
