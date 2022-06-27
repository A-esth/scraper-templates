const puppeteer = require('puppeteer');

( async ()=>{

    const browser = await puppeteer.launch({
        'headless': false
    })

    const page = await browser.newPage()

    await page.goto('https://www.udemy.com/course/puppeteer/')

    await browser.close()

})();