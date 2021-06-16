import { CartActionTypes } from "./cart-constants";

export const setToggleDropDown = () => {
    return {
        type: CartActionTypes.SET_IS_DROPDOWN_HIDDEN
    }
}

export const setCartItems = (items) => {
    return {
        type: CartActionTypes.SET_CART_ITEMS,
        payload: items
    }
}