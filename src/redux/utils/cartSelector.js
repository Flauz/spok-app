import {createSelector} from "reselect"

const selectCartData = state => state.cartReducer

const selectCartItems = createSelector(
    [selectCartData],
    cartReducer => cartReducer.CartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (quantity, cartItem) =>
                quantity + cartItem.quantity
            , 0)
);