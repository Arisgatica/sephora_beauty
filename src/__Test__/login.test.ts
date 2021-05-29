import { Builder, Capabilities, By, until} from "selenium-webdriver"
const chromedriver = require('chromedriver')
import {sephoraPage} from '../pageObjects/sephoraPage'
import {BasePage} from '../pageObjects/basePage'

const myDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

const myPage = new sephoraPage (myDriver, 'https://www.sephora.com/')

    test('Opens sephora.com and logs in', async () => {
    await myPage.navigate()
    await myPage.click(myPage.account)
    await myPage.click(myPage.account)
    await myPage.setInput(myPage.username, 'nacaari@yahoo.com')
    await myPage.setInput(myPage.password, 'SephoraTest123')
    await myPage.click(myPage.loginButton)
    await myDriver.sleep (5000)
    await myPage.click(myPage.account)
    await myPage.click(myPage.signOut)

})
