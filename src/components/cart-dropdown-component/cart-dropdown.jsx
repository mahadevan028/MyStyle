import React from 'react';

import './cart-dropdown.scss';

import CustomButton from '../custom-button-component/custom-button';

const CartDropdown = () => {
   return (
       <div className = "cart-dropdown">
           <div className = "cart-item">Empty Cart</div>
           <CustomButton>Checkout</CustomButton> 

       </div>
   )
}

export default CartDropdown