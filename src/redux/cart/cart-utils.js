export const addCartItem = (cartItems , itemToAdd) => {
  
    const isExist = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
    )


    if(isExist){
        return cartItems.map(item => {
            if(item.id===itemToAdd.id){
                return {...item, quantity:item.quantity + 1}
            }else {
                return item
            }
        })
    }

    return cartItems.concat({...itemToAdd, quantity:1});

}

export const decreaseCartItem = (cartItems,itemToDecrease) => {
    const isElementExist = cartItems.find(
        cartItem => cartItem.id === itemToDecrease.id
    )

    if(isElementExist.quantity === 1){
         return cartItems.filter(item => item.id !== isElementExist.id) 
    }

    return cartItems.map(item => {
        if(item.id===itemToDecrease.id){
            return {...item, quantity:item.quantity - 1}
        }else {
            return item
        }
    })

}

