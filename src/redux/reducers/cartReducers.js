import cartTypes from '../types/cartTypes'
import {addNewItem, reduceItem, removeCartItem} from './utils.cart'

const INITIAL_STATE= {
    cartItems: [],
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartTypes.ADD_TO_CART:
            return{
                ...state,
                cartItems: addNewItem(state.cartItems, action.cartItems)
            }
        case cartTypes.REDUCE_ITEM:
            return{
                ...state,
                cartItems: reduceItem(state.cartItems, action.cartItems)
            }
        case cartTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeCartItem(state.cartItems, action.cartItems)
            }
        default:
            return state
    }
}

export default cartReducer