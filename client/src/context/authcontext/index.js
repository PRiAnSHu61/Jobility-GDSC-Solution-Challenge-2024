import { useEffect } from 'react';
import { auth } from '../../firebase'
import React, { useState} from 'react';
import { useContext } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { createContext } from 'react';

const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}
export function AuthProvider({children}){
    const [currentUSer, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,intializedUser);
        return unsubscribe
    },[])
    async function intializedUser(user){
        if(user){
            setCurrentUser({...user});
            setUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false);
        }
        setLoading(false);
    }
    const value={
        currentUSer,
        userLoggedIn,
        loading
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}