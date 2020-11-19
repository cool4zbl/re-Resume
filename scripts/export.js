/* eslint-disable no-console */
const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')
const http = require('http')
const { setInterval } = require('timers')

const URL = 'http://localhost:3000/public'

const marginCN = {
  top: '.32in',
  right: '.28in',
  bottom: '.32in',
  left: '.32in',
}

const marginEN = {
  top: '.38in',
  right: '.4in',
  bottom: '.38in',
  left: '.4in',
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

const waitUntilPageLoaded = async () => {
  return new Promise(resolve => {
    let tId = setInterval(async () => {
      try {
        const code = await fetchPage(URL)
        if (code === 200) {
          clearInterval(tId)
          resolve(true)
        }
      } catch (e) {
        // reject(e)
      }
    }, 1000)
  }).catch(err => {
    console.log('WAIT_PAGE_LOADED ERROR ', err)
  })
}

const convert = async () => {
  console.log('CONNECTING SERVER')

  await waitUntilPageLoaded()

  const genPDF = async lang => {
    try {
      const fullDirPath = path.join(__dirname, '../download')
      if (!fs.existsSync(fullDirPath)) {
        fs.mkdirSync(fullDirPath)
      }

      const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
      })
      const page = await browser.newPage()
      const url = `${URL}?${lang === 'CN' ? 'lang=zh' : ''}`

      console.log('EXPORT PDF FROM `%s`', url)

      // page.on('requestfailed', request => {
      //   console.log('====== Request Failure ==== \n')
      //   console.log(request.url() + ' ' + request.failure().errorText)
      // })

      await page.goto(url, {
        waitUntil: 'networkidle2',
      })

      await page.pdf({
        path: `${fullDirPath}/zhangbinliu_resume${lang ? `_${lang}` : ''}.pdf`,
        format: 'A4',
        printBackground: true,
        margin: lang ? marginCN : marginEN,
      })

      await browser.close()
    } catch (err) {
      throw new Error(err)
    }
  }
  const genPDFCN = async () => await genPDF('CN')

  Promise.all([genPDF(), genPDFCN()]).then(() => {
    console.log('EXPORT FINISHED.')
  })
}

convert()
