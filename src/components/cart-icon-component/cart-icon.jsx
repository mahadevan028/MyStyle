import React from 'react';

import './cart-icon.scss';
import {connect} from 'react-redux';
import {setToggleDropDown } from '../../redux/cart/cart-actions.js';
import {selectCartItemsCount} from '../../redux/cart/cart-selector.js';


const CartIcon = ({setToggleDropDown,count}) => {

 

    return (
        <div className = "cart-icon" onClick={setToggleDropDown}>
           <span className = 'shopping-icon'><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> </span>
            <span className="item-count">{count}</span>
        </div>
    )
} 

const mapStateToProps = (state) => {
    return {
        count: selectCartItemsCount(state)
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setToggleDropDown: () => dispatch(setToggleDropDown())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);