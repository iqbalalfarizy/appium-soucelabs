import {  driver, $ } from '@wdio/globals'
import scrollTo from '../../helper/scroll.js'

class HomePage{
    //element locators
    get products(){ return $('~test-Cart drop zone')}
    get productsCard(){ return $$('//*[@content-desc="test-Item"]')}
    get productsName(){ return $$('//*[@content-desc="test-Item title"]')}
    get productsPrice(){ return $$('//*[@content-desc="test-Price"]')}
    get filter(){ return $('~test-Modal Selector Button')}
    get aToZ(){ return $('//*[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[2]')}
    get zToA(){ return $('//*[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[3]')}
    get lowToHigh(){ return $('//*[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[4]')}
    get highToLow(){ return $('//*[@content-desc="Selector container"]/android.view.ViewGroup/android.view.ViewGroup[5]')}
    get addToCartButton(){ return $('(//*[@content-desc="test-ADD TO CART"])[1]')}
    get textItem(){ return $('(//*[@content-desc="test-Item title"])[1]')}
    get addToCartButton2(){ return $('(//*[@content-desc="test-ADD TO CART"])[2]')}
    get textItem2(){ return $('(//*[@content-desc="test-Item title"])[2]')}  
    get removeButton(){ return $('~test-REMOVE')}
    get cartText(){ return $('//*[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.TextView')}
    get cart(){ return $('~test-Cart')}
    get backpack(){ return $('(//*[@content-desc="test-Item title"])[1]')}
    get layout(){ return $('~test-Toggle')}
    get itemDescription(){ return $('//*[@content-desc="test-Item description"]')}


    //action

    async changeLayout(){
        await this.layout.click()
    }

    async klikItemBackpack(){
        await this.backpack.click()
    }

    async klikCart(){
        await this.cart.click()
    }

    async klikRemoveButton(){
        await this.removeButton.click()
    }

    async klikAddToCartButton2(){
        await this.addToCartButton.click()
    }

    async klikAddToCartButton(){
        await this.addToCartButton.click()
    }

    async filterAToZ(){
        await this.filter.click()
        await this.aToZ.click()
    }

    async filterZToA(){
        await this.filter.click()
        await this.zToA.click()
    }

    async filterLowToHigh(){
        await this.filter.click()
        await this.lowToHigh.click()
    }

    async filterHighToLow(){
        await this.filter.click()
        await this.highToLow.click()
    }

    async getAllProductsName(){
        const allName = []
          const products = await this.productsName
        for (const product of products) {
            const nameText = await product.getText()
            allName.push(nameText)
        }
        return allName
    }

    async getAllProductsPrice(){
        const allPrice = []
        const products = await this.productsPrice
        for (const product of products) {
            const priceText = await product.getText()
            allPrice.push(priceText)
        }
        return allPrice
    }


    async scrollToAllProducts(){
        for (let i = 0; i < 10; i++) {                   
            let a = await this.productsCard
            // console.log('======>',a.length)
            if(a.length === 6 ){
                break
            }       
            await scrollTo(600,500)
        }
    }


}

export default new HomePage()