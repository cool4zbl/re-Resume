/* eslint-disable no-console */
const puppeteer = require('puppeteer')
const fs = require('fs')
const http = require('http')
const { setInterval } = require('timers')

const config = require('../config')

const { host, port, publicPath, downloadDir, downloads } = config

const URL = `http://${host}:${port}${publicPath || ''}`.replace('//', '/')

// 调参侠....
// const marginCN = {
//   top: '.32in',
//   right: '.28in',
//   bottom: '.32in',
//   left: '.32in',
// }

// const marginEN = {
//   top: '.36in',
//   right: '.4in',
//   bottom: '.36in',
//   left: '.4in',
// }

const marginCN = {
  top: '.38in',
  right: '.5in',
  bottom: '.38in',
  left: '.5in',
}

const marginEN = {
  top: '.45in',
  right: '.6in',
  bottom: '.45in',
  left: '.6in',
}

const fetchPage = url => {
  return new Promise((resolve, reject) => {
    try {
      const req = http.request(url, response => resolve(response.statusCode))
      req.on('error', err => reject(err))
      req.end()
    } catch (e) {
      reject(e)
    }
  })
}

const waitUntilPageLoaded = async url => {
  return new Promise(resolve => {
    let tId = setInterval(async () => {
      try {
        const code = await fetchPage(url)
        if (code === 200) {
          clearInterval(tId)
          resolve(true)
        }
      } catch (e) {
        // reject(e)
      }
    }, 500)
  }).catch(err => {
    console.log('WAIT_PAGE_LOADED ERROR ', err)
  })
}

const convert = async () => {
  console.log('CONNECTING SERVER')

  await waitUntilPageLoaded(URL)

  const fullDirPath = downloadDir
  if (!fs.existsSync(fullDirPath)) {
    fs.mkdirSync(fullDirPath)
  }

  const genPDF = async (lang, download) => {
    try {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
      })
      const page = await browser.newPage()
      // const url = `${URL}?${lang === 'ZH' ? 'lang=zh' : ''}`

      console.log('EXPORT PDF FROM `%s`', download.url)

      await page.goto(download.url, {
        waitUntil: 'networkidle2',
      })

      await page.pdf({
        path: download.filePath,
        format: 'A4',
        printBackground: true,
        margin: lang ? marginCN : marginEN,
      })

      await browser.close()
    } catch (err) {
      throw new Error(err)
    }
  }

  Promise.all(
    Object.entries(downloads).map(async ([lang, download]) => {
      await genPDF(lang, download)
    })
  ).then(() => {
    console.log('pdf export finished.')
  })
}

convert()
