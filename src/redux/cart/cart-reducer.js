import { CartActionTypes } from "./cart-constants";
import {addCartItem} from './cart-utils.js';


const INITAL_STATE = {
    isHidden: true,
    cartItems: []
}

const cartReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.SET_IS_DROPDOWN_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        case CartActionTypes.SET_CART_ITEMS:
            return{
                ...state,
                cartItems: addCartItem(state.cartItems,action.payload)
            }    
        default:
            return state;
    }
}

export default cartReducer;