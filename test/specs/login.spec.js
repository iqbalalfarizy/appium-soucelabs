import { driver,  expect } from '@wdio/globals'
import HomePage from '../pageobjects/homePage.js'
import LoginPage from '../pageobjects/loginPage.js'

describe('PROCESS LOGIN', function(){

   
    afterEach(async function() {
        await driver.reloadSession()
    })

    it('login with standard user', async function(){
        await LoginPage.loginProcess('standard_user','secret_sauce')
        await expect (HomePage.products).toBeDisplayed()
    })


    it('login with problem user', async function(){
        await LoginPage.loginProcess('problem_user','secret_sauce')
        await expect (HomePage.products).toBeDisplayed()
    })


    it('login with locked out user', async function(){
        await LoginPage.loginProcess('locked_out_user','secret_sauce')
        await expect (LoginPage.errorMassgae).toHaveText('Sorry, this user has been locked out.')
    })


    it('login with wrong username', async function(){
        await LoginPage.loginProcess('iqbal','secret_sauce')
        await expect (LoginPage.errorMassgae).toHaveText('Username and password do not match any user in this service.')
    })


    it('login with wrong password', async function(){
        await LoginPage.loginProcess('standard_user','iqbal')
        await expect (LoginPage.errorMassgae).toHaveText('Username and password do not match any user in this service.')
    })


    it('login with empty username', async function(){
        await LoginPage.loginProcess('','secret_sauce')
        await expect (LoginPage.errorMassgae).toHaveText('Username is required')
    })

    it('login with empty password', async function(){
        await LoginPage.loginProcess('standard_user','')
        await expect (LoginPage.errorMassgae).toHaveText('Password is required')
    })
})