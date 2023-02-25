import React, { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendSignInLinkToEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    //create user with email
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //Sign in with email
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


    const authInfo = {
        createUserWithEmail,
        loginWithEmail
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};


export default AuthProvider;