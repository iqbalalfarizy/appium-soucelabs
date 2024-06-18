import { $ } from '@wdio/globals'


class DescriptionPage{
    
    //element locators
    get textItem(){ return $('//*[@content-desc="test-Description"]/android.widget.TextView[1]')}
    get addToCartButton(){ return $('~test-ADD TO CART')}
    get removeButton(){ return $('~test-REMOVE')}
    get cartText(){ return $('//*[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView')}
    get backToProducst(){ return $('~test-BACK TO PRODUCTS')}
    get cart(){ return $('~test-Cart')}

    //action

    async klikCart() {
        await this.cart.click()
    }

    async klikBackToProducst() {
        await this.backToProducst.click()
    }

    async klikAddToCartButton() {
        await this.addToCartButton.click()
    }

    async klikRemoveButton() {
        await this.removeButton.click()
    }

}

export default new DescriptionPage