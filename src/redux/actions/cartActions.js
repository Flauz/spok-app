import cartTypes from "../types/cartTypes"

export const addToCart = item => ({
    type: cartTypes.ADD_TO_CART,
    cartItems: item
})