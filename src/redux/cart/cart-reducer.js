import { CartActionTypes } from "./cart-constants";
const INITAL_STATE = {
    isHidden: true
}

const cartReducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.SET_IS_DROPDOWN_HIDDEN:
            return {
                ...state,
                isHidden: !state.isHidden
            }
        default:
            return state;
    }
}

export default cartReducer;