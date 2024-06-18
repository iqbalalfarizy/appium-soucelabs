import { driver, expect } from '@wdio/globals'
import scrollTo from '../../helper/scroll.js'
import cartPage from '../pageobjects/cartPage.js'
import CartPage from '../pageobjects/cartPage.js'
import HomePage from '../pageobjects/homePage.js'
import LoginPage from '../pageobjects/loginPage.js'


describe('CART PAGE', function(){

    beforeEach('Navigate to Cart Page With One Item', async function(){
        await LoginPage.loginProcess('standard_user', 'secret_sauce')
        await HomePage.klikAddToCartButton()
        await HomePage.klikCart()
    })

    afterEach(async function(){
        await driver.reloadSession()
    })

    it('Checkout Process', async function(){
        await scrollTo(600,500)
        await CartPage.klikCheckout()
        await expect(CartPage.checkoutPage).toBeDisplayed()
    })


    it('Back to Home to Continue Shopping', async function(){
        const cartText = await CartPage.cartText.getText()
        await CartPage.klikBackToHome()
        await expect(HomePage.cartText).toHaveText(cartText)
    })

    it('Remove Item from Cart', async function(){
        await driver.pause(500)
        await CartPage.klikRemoveButton()
        await expect(CartPage.item).not.toBeDisplayed()
    })



})