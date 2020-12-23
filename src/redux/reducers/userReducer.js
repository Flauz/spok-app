import userTypes from '../types/userTypes'

const INITIAL_STATE = {
    currentUser: null,
    signInSucces: false,
    signUpError: [],
    signUpSucces: false,
    resetPasswordError: [],
    resetPasswordSucces: false

}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userTypes.SET_CURRENT_USER: 
            return {
                ...state,
                currentUser: action.currentUser
            }
        case userTypes.SIGN_IN_SUCCES:
            return {
                ...state,
                signInSucces: action.currentUser
            }
        case userTypes.SIGN_UP_ERROR:
            return{
                ...state,
                signUpError: action.currentUser
            }
        case userTypes.SIGN_UP_SUCCES:
            return{
                ...state,
                signUpSucces: action.currentUser
            }
        case userTypes.RESET_PASSWORD_ERROR:
            return{
                ...state,
                resetPasswordError: action.currentUser
            }
        case userTypes.RESET_PASSWORD_SUCCESS:
            return{
                ...state,
                resetPasswordSucces: action.currentUser
            }
        default: 
            return state
        
    }
} 

export default userReducer