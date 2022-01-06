import {CartTypes} from "./cart-types";

export const toggleCartHidden = () => ({
    type: CartTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CartTypes.ADD_CART_ITEM,
    payload: item
})

export const removeItem = item => ({
    type: CartTypes.REMOVE_CART_ITEM,
    payload: item
})

export const deleteItemFromCart = item => ({
    type: CartTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})
