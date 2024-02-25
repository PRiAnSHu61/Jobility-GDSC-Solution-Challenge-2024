import { auth } from './firebase'

import {createUserWithEmailAndPassword, GoogleAuthProvider ,signInWithEmailAndPassword,signInWithPopup} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async(email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

export const doSignInWithEmailAndPassword = async(email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

export const doSignInWithGoogle = async() =>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // console.log(result)
    return result
}
export const doSignOut = async() =>{
    return auth.signOut()
}
// export const doPasswordReset = async(email) =>{
//     return auth.sendPasswordResetEmail(email)
// }
// export const doPasswordUpdate = async(password) =>{
//     return updatePassword(auth.currentUsere,password)
// }
// export const doEmailVerification = async() =>{
//    return sendEmailVerification(auth.currentUser,{
//     url:`${window.location.origin}/Home`,
//    })
// }
