import { Builder, Capabilities, By, until} from "selenium-webdriver"
const chromedriver = require('chromedriver')
import {sephoraPage} from '../pageObjects/sephoraPage'
import {BasePage} from '../pageObjects/basePage'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new sephoraPage (myDriver, 'https://www.sephora.com/')

    test('Opens sephora.com and logs in', async () => {
    await myPage.navigate()
    await myPage.click (myPage.search)
    await myPage.setInput (myPage.search, 'Makeup Removing Cleanser\n')
    await myPage.click(myPage.closeX)

    })

    afterAll (async () => {
        await myDriver.quit ()
    })