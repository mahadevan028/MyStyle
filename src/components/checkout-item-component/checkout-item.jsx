import React from 'react';
import './checkout-item.scss';
import {connect}  from 'react-redux';
import {setRemoveCartItems, setCartItems, setDecreaseCartItems} from '../../redux/cart/cart-actions.js'


const CheckoutItem = ({cartItem, removeCartItems, setCartItems, decreaseCartItems}) => {

    return(
        <div className='checkout-item'>
            <div className='image-container'> 
            <img src={cartItem.imageUrl} alt="productImage" />
            </div>
            <span className="name">{cartItem.name}</span>
            <span className="quantity">
               <div className="arrow"  onClick={()=>decreaseCartItems(cartItem)}><i className="fa fa-arrow-left" aria-hidden="true"></i> </div>
                <span className="value">{cartItem.quantity}</span>
                <div className="arrow" onClick={()=>setCartItems(cartItem)}><i className="fa fa-arrow-right" aria-hidden="true"></i> </div>
            </span>
            <span className="price">&#8377; {cartItem.price}</span>
            <div className="remove-button" title="remove" onClick={() => removeCartItems(cartItem)}><i className="fa fa-trash" aria-hidden="true"></i></div>
        </div>

    )


}

const mapDispatchToState = dispatch => {
    return {
        removeCartItems: item => dispatch(setRemoveCartItems(item)),
        setCartItems: item => dispatch(setCartItems(item)),
        decreaseCartItems: item => dispatch(setDecreaseCartItems(item))
    }
}
    


export default connect(null,mapDispatchToState)(CheckoutItem);