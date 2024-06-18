import { driver, $, expect } from '@wdio/globals'

class LoginPage{
    //element locators
    get username(){ return $('~test-Username') }
    get password(){ return $('~test-Password') }
    get loginButton(){ return $('~test-LOGIN') }
    get errorMassgae(){ return $('//*[@content-desc="test-Error message"]/android.widget.TextView')  }


    //page action
    async loginProcess(a, b){
        await this.username.setValue(a)
        await this.password.setValue(b)
        await this.loginButton.click()
    }





}

export default new LoginPage()