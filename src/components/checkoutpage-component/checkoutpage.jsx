import React from 'react';
import { connect } from 'react-redux';
import {selectCartItems, calculateCartItemsTotalPrice} from '../../redux/cart/cart-selector.js';
import CheckoutItem from '../checkout-item-component/checkout-item.jsx';


import './checkoutpage.scss';

const Checkoutpage = ({cartItems, totalPrice}) =>{
return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                    <div className="header-block">
                      <span>Product</span>
                    </div>
                    <div className="header-block">
                      <span>Description</span>
                    </div>
                    <div className="header-block">
                      <span>Quantity</span>
                    </div>
                    <div className="header-block">
                      <span>Price</span>
                    </div>
                    <div className="header-block">
                      <span>Remove</span>
                    </div>
            </div>

            {!!cartItems.length?
             cartItems.map(item => <CheckoutItem cartItem={item}/>) : 
             <div className="empty-cart">Cart is Empty!</div>
            }
            <div className="total">
                    <span>
                         TOTAL: &#8377; {totalPrice}
                    </span>
            </div>
        </div>
)
}

const mapStateToProps = (state) => {
        return {
            cartItems: selectCartItems(state),
            totalPrice: calculateCartItemsTotalPrice(state)
        }
    }

export default connect(mapStateToProps)(Checkoutpage);