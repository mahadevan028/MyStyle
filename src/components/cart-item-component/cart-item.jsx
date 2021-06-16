import React from 'react';

import './cart-item.scss'

const CartItem = ({item}) => {
 return (
     <div className = "cart-item">
      <img src={item.imageUrl} alt="itemImage" />
     <div className = "item-details">
         <span className = "name">{item.name}</span>
         <span className = "price">{item.quantity}  X  &#8377;{item.price}</span>

     </div>
     </div>
 )

}

export default CartItem;