const puppeteer = require('puppeteer')
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/public', { waitUntil: 'networkidle2' })
  await page.emulateMediaType('screen')
  await page.pdf({
    path: 'zhangbinliu-resume.pdf',
    format: 'A4',
    printBackground: true,
  })

  await browser.close()
})()
