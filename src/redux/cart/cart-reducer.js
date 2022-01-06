import {addItemToCart, removeItemFromCart} from "./cart-utils";
import {CartTypes} from "./cart-types";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log("STATE CART"+ state.hidden)
    switch (action.type) {
        case CartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case CartTypes.REMOVE_CART_ITEM:
            return {
                ...state.cartItems,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        case CartTypes.CLEAR_ITEM_FROM_CART:
            return  {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };
        default:
            return state
    }
}

export default cartReducer;