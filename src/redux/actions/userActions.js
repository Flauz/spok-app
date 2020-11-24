import userTypes from '../types/userTypes'
import {auth, handleUserProfile} from "../../firebase/utils"


export const setCurrentUser = user => ({
    type : userTypes.SET_CURRENT_USER,
    currentUser: user
})

export const signInUser = ({email, password}) => async dispatch => {
    try {
        await auth.signInWithEmailAndPassword(email, password)
        dispatch({
            type: userTypes.SIGN_IN_SUCCES,
            currentUser: true
        })
    } catch (err) {
        console.log(err)
    }
}

export const signUpUser = ({displayName, email, password, confirmPassword}) => async dispatch => {
    if (password !== confirmPassword) {
        const err = ["les mots de passe ne correspondent pas."]
        dispatch({
            type: userTypes.SIGN_UP_ERROR,
            currentUser: err
        })
        return
    }
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password)
        await handleUserProfile(user, { displayName })
        dispatch({
            type: userTypes.SIGN_UP_SUCCES,
            currentUser: true
        })
    } catch (err) {
        console.log(err)
    }
}

export const resetPassword = ({email}) => async dispatch => {
    try {
        const config = {
            url: 'http://localhost:3000/login'
        }
        await auth.sendPasswordResetEmail(email, config)
            .then(() =>
                dispatch({
                    type: userTypes.RESET_PASSWORD_SUCCESS,
                    currentUser: true
                })
            )
            .catch(
                () => {
                    const err = ["L'email n'a pas été trouvé. Merci de réessayer"]
                    dispatch({
                        type: userTypes.RESET_PASSWORD_ERROR,
                        currentUser: err
                    })
                    
                }
            )
    } catch (err) {
        console.log(err)
    }
}
