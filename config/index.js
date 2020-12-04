const path = require('path')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')

const downloadDir = path.join(__dirname, '../download')

const langs = ['enUS', 'zhCN']

const URL = `http://${host}:${port}${publicPath || ''}`.replace('//', '/')
const url = lang => `${URL}?${lang === 'zhCN' ? 'lang=zh' : ''}`
const downloadFilePath = lang =>
  `/resume${downloadDir}/zhangbinliu_resume${
    lang === 'zhCN' ? `_${lang}` : ''
  }.pdf`

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
