import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
    userReducer
})

export const middlewares = [thunk,logger]

const store = createStore(
    reducer,
    applyMiddleware(...middlewares)
)

export default store