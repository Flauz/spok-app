import cartTypes from "../types/cartTypes"

export const addToCart = item => ({
    type: cartTypes.ADD_TO_CART,
    cartItems: item
})

export const removeItem = item => ({
    type: cartTypes.REMOVE_ITEM,
    cartItems: item
})

export const reduceItem = item =>  ({
    type: cartTypes.REDUCE_ITEM,
    cartItems: item
})