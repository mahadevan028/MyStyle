import React from 'react';

import './cart-icon.scss';
import {connect} from 'react-redux';
import {setToggleDropDown } from '../../redux/cart/cart-actions.js';


const CartIcon = ({setToggleDropDown}) => {
    return (
        <div className = "cart-icon" onClick={setToggleDropDown}>
           <span className = 'shopping-icon'><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> </span>
            <span className="item-count">0</span>
        </div>
    )
} 

const mapDispatchToProps = (dispatch) => {
    return {
        setToggleDropDown: () => dispatch(setToggleDropDown())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);