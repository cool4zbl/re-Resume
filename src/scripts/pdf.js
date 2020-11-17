const puppeteer = require('puppeteer')
;(async () => {
  const browser = await puppeteer.launch()
  const URL = 'http://localhost:3000/public'

  // const genPDF = async lang => {
  //   const page = await browser.newPage()

  //   await page.goto(`${URL}?${lang === 'CN' ? 'lang=zh' : ''}`, {
  //     waitUntil: 'networkidle2',
  //   })
  //   await page.pdf({
  //     path: `./download/zhangbinliu_resume${lang ? `_${lang}` : ''}.pdf`,
  //     format: 'A4',
  //     printBackground: true,
  //   })
  //   await browser.close()
  // }
  // const genPDFCN = async () => await genPDF('CN')
  // Promise.all([genPDF(), genPDFCN()])

  const genPDFchinese = async () => {
    const page = await browser.newPage()
    const url = `${URL}?lang=zh`
    console.log('== gen pdf from ', url)

    await page.goto(url, {
      waitUntil: 'networkidle2',
    })
    await page.pdf({
      path: './download/zhangbinliu_resume_cn.pdf',
      format: 'A4',
      printBackground: true,
    })
    await browser.close()
  }
  genPDFchinese()
})()
