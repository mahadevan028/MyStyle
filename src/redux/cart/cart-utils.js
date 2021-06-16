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

