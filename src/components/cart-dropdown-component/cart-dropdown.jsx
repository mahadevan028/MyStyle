import React from 'react';

import './cart-dropdown.scss';
import {connect} from 'react-redux';

import CustomButton from '../custom-button-component/custom-button';
import CartItem from '../cart-item-component/cart-item';
import {selectCartItems} from '../../redux/cart/cart-selector.js';

const CartDropdown = ({cartItems}) => {
   return (
       <div className = "cart-dropdown">
           <div className = "cart-items">
               {
                cartItems.length>0 ?
                cartItems.map(item => {
                  return (
                    <CartItem key = {item.id} item = {item}/>
                  )
                }) : <div className="empty-cart">Empty Cart!</div>
               }
           </div>
           <CustomButton>Checkout</CustomButton> 

       </div>
   )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropdown);