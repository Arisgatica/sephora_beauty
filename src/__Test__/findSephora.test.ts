import { Builder, Capabilities, By, until} from "selenium-webdriver"
const chromedriver = require('chromedriver')
import {sephoraPage} from '../pageObjects/sephoraPage'
import {BasePage} from '../pageObjects/basePage'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new sephoraPage (myDriver, 'https://www.sephora.com/')

    test('Find a store near your city', async () => {
    await myPage.navigate()
    await myPage.click (myPage.storeLocator)
    await myPage.click(myPage.findSephora)
    await myDriver.sleep (2000)
    await myPage.click(myPage.closeX)
    await myDriver.sleep (5000)
    await myPage.setInput(myPage.zip, '98052')
    await myDriver.sleep (5000)
    await myPage.return(myPage.zip)
})


