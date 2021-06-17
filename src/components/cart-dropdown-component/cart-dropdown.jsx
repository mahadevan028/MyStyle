import React from 'react';

import './cart-dropdown.scss';
import {connect} from 'react-redux';

import CustomButton from '../custom-button-component/custom-button';
import CartItem from '../cart-item-component/cart-item';
import {selectCartItems} from '../../redux/cart/cart-selector.js';
import {withRouter} from 'react-router-dom';
import {setToggleDropDown} from '../../redux/cart/cart-actions.js'

const CartDropdown = ({cartItems,history, ...otherProps}) => {
   return (
       <div className = "cart-dropdown">
           <div className = "cart-items">
               {
                cartItems.length ?
                cartItems.map(item => {
                  return (
                    <CartItem key = {item.id} item = {item}/>
                  )
                }) : <div className="empty-cart">Your Cart is empty!</div>
               }
           </div>
           <CustomButton onClick={
               () => {
                   history.push('/checkout')
                   otherProps.dispatch(setToggleDropDown())
               }
           }>Checkout</CustomButton>
       </div>
   )
}

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));