import { CartActionTypes } from "./cart-constants";

export const setToggleDropDown = () => {
    return {
        type: CartActionTypes.SET_IS_DROPDOWN_HIDDEN
    }
}