
export function isDescending(item){

    if(item.every(i => i.includes('$'))){
        let ty = item.map(y => Number(y.replace("$","")))
        return ty.every(function (x, i) {
    
            if(i===0){
                return true 
            }else{
                return x <= ty[i-1]           
            }  
        })
    }else{
        return item.every(function (x, i) {
    
            if(i===0){
                return true 
            }else{
                return x <= item[i-1]           
            }  
        })
    }
    

}

export function isAscending(item){

    if(item.every(i => i.includes('$'))){
        let ty = item.map(y => Number(y.replace("$","")))
        return ty.every(function (x, i) {
    
            if(i===0){
                return true 
            }else{
                return x >= ty[i-1]           
            }  
        })
    }else{
        return item.every(function (x, i) {
    
            if(i===0){
                return true 
            }else{
                return x >= item[i-1]           
            }  
        })
    }

    
}


// const a= [ '$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99' ]
// const b= [ '$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99' ]
// const c= [   'Sauce Labs Backpack',   'Sauce Labs Bike Light',   'Sauce Labs Bolt T-Shirt',   'Sauce Labs Fleece Jacket',   'Sauce Labs Onesie',   'Test.allTheThings() T-Shirt (Red)' ]
// const d= [   'Test.allTheThings() T-Shirt (Red)',   'Sauce Labs Onesie',   'Sauce Labs Fleece Jacket',   'Sauce Labs Bolt T-Shirt',   'Sauce Labs Bike Light',   'Sauce Labs Backpack' ]
// console.log(isAscending(a))
// console.log(isDescending(b))
// console.log(isAscending(c))
// console.log(isDescending(d))