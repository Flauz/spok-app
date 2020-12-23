import {combineReducers} from 'redux'
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage"
import userReducer from './reducers/userReducer'
import orderReducer from './reducers/orderReducer'
import cartReducer from './reducers/cartReducers'


export const rootReducer = combineReducers({
    userReducer,
    orderReducer,
    cartReducer
})

const configStorage =  {
    key : 'root',
    storage,
    whitelist: ['cartReducer']
}

export default persistReducer(configStorage, rootReducer)