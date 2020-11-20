import userTypes from '../types/userTypes'

const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userTypes.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser: action.currentUser
            }
        default: 
            return state
        
    }
} 

export default userReducer