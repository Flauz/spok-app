import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import { firebaseConfig } from "./config"

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestone = firebase.firestore()

const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider)

export const handleUserProfile = async (userAuth, additionnalData) => {
    if(!userAuth) return;
    const {id} = userAuth
    const userRef = firestone.doc(`users/${id}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists){
        const {displayName, email} = userAuth
        const timestamp = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                ...additionnalData
            })
        } catch(err){

        }
    }
    return userRef
}