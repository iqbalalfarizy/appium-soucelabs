import { driver, $, expect } from '@wdio/globals'
import homePage from '../pageobjects/homePage.js'
import loginPage from '../pageobjects/loginPage.js'

describe('PROCESS LOGIN', function(){

   
    afterEach(async function() {
        await driver.reloadSession()
    })

    it('login with standard user', async function(){
        await loginPage.loginProcess('standard_user','secret_sauce')
        await expect (homePage.products).toBeDisplayed()
        // await driver.back()
    })


    it('login with problem user', async function(){
        await loginPage.loginProcess('problem_user','secret_sauce')
        await expect (homePage.products).toBeDisplayed()
        // await driver.back()
    })


    it('login with locked out user', async function(){
        await loginPage.loginProcess('locked_out_user','secret_sauce')
        await expect (loginPage.errorMassgae).toHaveText('Sorry, this user has been locked out.')
    })


    it('login with wrong username', async function(){
        await loginPage.loginProcess('iqbal','secret_sauce')
        await expect (loginPage.errorMassgae).toHaveText('Username and password do not match any user in this service.')
    })


    it('login with wrong password', async function(){
        await loginPage.loginProcess('standard_user','iqbal')
        await expect (loginPage.errorMassgae).toHaveText('Username and password do not match any user in this service.')
    })


    it('login with empty username', async function(){
        await loginPage.loginProcess('','secret_sauce')
        await expect (loginPage.errorMassgae).toHaveText('Username is required')
    })

    it('login with empty password', async function(){
        await loginPage.loginProcess('standard_user','')
        await expect (loginPage.errorMassgae).toHaveText('Password is required')
    })
})