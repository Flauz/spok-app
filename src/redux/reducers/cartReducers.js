import cartTypes from '../types/cartTypes'
import {addNewItem} from './utils.cart'

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
        default:
            return state
    }
}

export default cartReducer