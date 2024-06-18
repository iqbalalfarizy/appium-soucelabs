import { driver, expect } from '@wdio/globals'
import scrollTo from '../../helper/scroll.js'
import CartPage from '../pageobjects/cartPage.js'
import DescriptionPage from '../pageobjects/descriptionPage.js'
import HomePage from '../pageobjects/homePage.js'
import LoginPage from '../pageobjects/loginPage.js'

describe('DESCRIPTION PAGE',function(){

    beforeEach('Go to Description Page', async function(){
        await LoginPage.loginProcess('standard_user', 'secret_sauce')
        await HomePage.klikItemBackpack()
    })

    afterEach(async function(){
        await driver.reloadSession()
    })

    it('Add Item to Cart', async function(){
        await scrollTo(800,500)
        await DescriptionPage.klikAddToCartButton()
        await expect(DescriptionPage.removeButton).toBeDisplayed()
        await expect(DescriptionPage.cartText).toHaveText('1')
    })

    it('Remove Item from Cart', async function(){
        await scrollTo(800,500)
        await DescriptionPage.klikAddToCartButton()
        await DescriptionPage.klikRemoveButton()
        await expect(DescriptionPage.cartText).not.toBeDisplayed()
    })

    it('Back to Products', async function(){
        await DescriptionPage.klikBackToProducst()
        await expect(HomePage.products).toBeDisplayed()
    })

    it('Navigate to Cart Page with No Item', async function(){
        await DescriptionPage.klikCart()
        await expect (CartPage.cartContent).toBeDisplayed()
    })

    it('Navigate to Cart Page with One Item', async function(){
        const textItem = await DescriptionPage.textItem.getText()
        await scrollTo(800,500)
        await DescriptionPage.klikAddToCartButton()
        await DescriptionPage.klikCart()
        await expect (CartPage.textItem).toHaveText(textItem)
    })




})