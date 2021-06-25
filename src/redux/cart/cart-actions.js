import { CartActionTypes } from "./cart-constants";

export const setToggleDropDown = () => {
    return {
        type: CartActionTypes.SET_IS_DROPDOWN_HIDDEN
    }
}

export const setCartItems = (item) => {
    return {
        type: CartActionTypes.SET_CART_ITEMS,
        payload: item
    }
}

export const setRemoveCartItems = (item) => {
    return {
        type: CartActionTypes.REMOVE_CART_ITEMS,
        payload: item
    }
}

export const setDecreaseCartItems = (item) => {
    return {
        type:CartActionTypes.DECREASE_CART_ITEMS,
        payload:item
    }
}