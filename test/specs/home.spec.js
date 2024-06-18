import { expect, driver } from '@wdio/globals'
import { isAscending, isDescending } from '../../helper/sort.js'
import CartPage from '../pageobjects/cartPage.js'
import DescriptionPage from '../pageobjects/descriptionPage.js'
import HomePage from '../pageobjects/homePage.js'
import LoginPage from '../pageobjects/loginPage.js'

describe('HOME PAGE', function(){

    beforeEach('Login', async function(){
        await LoginPage.loginProcess('standard_user','secret_sauce')
    })

    afterEach(async function(){
        await driver.reloadSession()
    })

    it('Sort Item by Name (A to Z)', async function(){
        await HomePage.filterAToZ()
        await HomePage.scrollToAllProducts()
        const a = await HomePage.getAllProductsName()
        await expect (isAscending(a)).toBe(true)
    })

    it('Sort Item by Name (Z to A)', async function(){
        await HomePage.filterZToA()
        await HomePage.scrollToAllProducts()
        const b = await HomePage.getAllProductsName()
        await expect (isDescending(b)).toBe(true)
    })

    it('Sort Item by Price (low to high)', async function(){
        await HomePage.filterLowToHigh()
        await HomePage.scrollToAllProducts()
        const c = await HomePage.getAllProductsPrice()
        await expect (isAscending(c)).toBe(true)
    })

    it('Sort Item by Price (high to low)', async function(){
        await HomePage.filterHighToLow()
        await HomePage.scrollToAllProducts()
        const d = await HomePage.getAllProductsPrice()
        await expect (isDescending(d)).toBe(true)
    })

    it('Add Item to Cart', async function(){
        await HomePage.klikAddToCartButton()
        await expect (HomePage.removeButton).toBeDisplayed()
        await expect (HomePage.cartText).toHaveText('1')
    })

    it('Remove Item from Cart', async function(){
        await HomePage.klikAddToCartButton()
        await HomePage.klikRemoveButton()
        await expect (HomePage.cartText).not.toBeDisplayed()
    })

    it('Navigate to Cart Page with No Item', async function(){
        await HomePage.klikCart()
        await expect (CartPage.cartContent).toBeDisplayed()
    })

    it('Navigate to Cart Page with One Item', async function(){
        const textItem = await HomePage.textItem.getText()
        await HomePage.klikAddToCartButton()
        await HomePage.klikCart()
        await expect (CartPage.textItem).toHaveText(textItem)
    })

    it('Navigate to Cart Page with Multiple Item', async function(){
        const textItem = await HomePage.textItem.getText()
        const textItem2 = await HomePage.textItem2.getText()
        await HomePage.klikAddToCartButton()
        await HomePage.klikAddToCartButton2()
        await HomePage.klikCart()
        await expect (CartPage.textItem).toHaveText(textItem)
        await expect (CartPage.textItem2).toHaveText(textItem2)
    })

    it('Klik Item to See Description', async function(){
        const textItem = await HomePage.backpack.getText()
        await HomePage.klikItemBackpack()
        await expect (DescriptionPage.textItem).toHaveText(textItem)
    })

    it('Change Layout to List View', async function(){
        await HomePage.changeLayout()
        await expect (HomePage.itemDescription).toBeDisplayed()
    })

    



})