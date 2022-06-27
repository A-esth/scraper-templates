const puppeteer = require("puppeteer")
const expect = require('chai').expect

describe('Puppeteer Test', ()=>{
    it('should launch the browser', async function(){
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 10,
            devtools: false,
        })
        const page = await browser.newPage()

        await page.setDefaultTimeout(10000)

        await page.goto('http://example.com')
        await page.waitForXPath('//h1')
        const title = await page.title()
        const url = await page.url()
        const text = await page.$eval('h1', element => element.textContent)
        const count = await page.$$eval('p', element => element.length)

        expect(title).to.be.a('string', 'Example Domain')
        expect(url).to.include('example.com')
        expect(text).to.be.a('string', 'Example Domain')
        expect(count).to.equal(2)


        await page.goto('http://zero.webappsecurity.com/')
        await page.waitForSelector('#searchTerm')
        await page.type('#searchTerm', 'Hello World!')
        await page.keyboard.press('Enter', {delay: 10})
        await page.waitFor(5000)
        await browser.close()
    })
})