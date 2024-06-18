import { $ } from '@wdio/globals'


class CartPage{
    
    //element locators
    get cartContent(){ return $('~test-Cart Content')}
    get textItem(){ return $('(//*[@content-desc="test-Description"])[1]/android.widget.TextView[1]')}
    get textItem2(){ return $('(//*[@content-desc="test-Description"])[2]/android.widget.TextView[1]')} 
    get removeButton(){ return $('~test-REMOVE')}
    get item(){ return $('~test-Item')}
    get backToHome(){ return $('//android.view.ViewGroup[@content-desc="test-CONTINUE SHOPPING"]/android.widget.TextView')}
    get cartText(){ return $('//*[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView')}
    get checkout(){ return $('~test-CHECKOUT')}
    get checkoutPage(){ return $('~test-Checkout: Your Info')}

    //action

    async klikCheckout(){
        await this.checkout.click()
    }
    
    async klikBackToHome(){
        await this.backToHome.click()
    }
    
    async klikRemoveButton(){
        await this.removeButton.click()
    }

}

export default new CartPage