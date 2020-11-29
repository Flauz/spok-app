import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import orderReducer from './reducers/orderReducer'
import cartReducer from './reducers/cartReducers'

const reducer = combineReducers({
    userReducer,
    orderReducer,
    cartReducer
})

export const middlewares = [thunk,logger]

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)

export default store