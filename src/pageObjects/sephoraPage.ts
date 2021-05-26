import { By } from 'selenium-webdriver'
import {BasePage} from './basePage'

export class sephoraPage extends BasePage {
    constructor (driver, url) {
        super(driver, url)
    }
    signIn: By = By.className('css-18o3fsq eanm77i0')
    username: By = By.name('username')
    password: By = By.name('password')
    loginButton: By = By.className('css-1u0n82l eanm77i0')
    makeup: By = By.id('top_nav_drop_2_trigger')
    product: By = By.className('css-1n99v7w')
    loveButton2: By = By.className('css-29qfqk eanm77i0')
    loveButton: By = By.className('css-1omavfm')
    lovedItemsList: By = By.id('loves_drop_trigger')
    foundation: By = By.className('css-15femay e65zztl0')
    item: By = By.xpath('//span[text()="Luminous Silk Perfect Glow Flawless Oil-Free Foundation"]')
    account: By = By.id('account_drop_trigger')
    signButton: By = By.css('css-18o3fsq eanm77i0')
    signOut: By = By.className('css-1bxfudy eanm77i0')
    editPassword: By = By.css('css-115blb8 eanm77i0')
    search: By = By.id('site_search_input')
    closeX: By = By.className('css-1kna575')
    storeLocator: By = By.id('stores_drop_trigger')
    findSephora: By = By.id('find-a-sephora')
    zip: By = By.id('currentLocation')


    checkout: By = By.name('checkout')
    firstname: By = By.id('first-name')
    lastname: By = By.css('input[name="lastName"]')
    postalcode: By = By.id('postal-code')
    continue: By = By.id('continue')
    continueShopping: By = By.id ('continue-shopping')
    finish: By = By.id('finish')

}