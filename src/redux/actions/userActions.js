import userTypes from '../types/userTypes'


export const setCurrentUser = user => ({
    type : userTypes.SET_CURRENT_USER,
    currentUser: user
})