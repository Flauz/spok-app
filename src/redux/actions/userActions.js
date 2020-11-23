import userTypes from '../types/userTypes'
import {auth} from "../../firebase/utils"


export const setCurrentUser = user => ({
    type : userTypes.SET_CURRENT_USER,
    currentUser: user
})

export const signInUser = ({email, password}) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
        console.log(err)
    }
}
