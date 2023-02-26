import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //create user with email
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //Sign in with email
    const loginWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //manage user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    //logout
    const logout = () => {
        return signOut(auth);
    };


    const authInfo = {
        createUserWithEmail,
        loginWithEmail,
        user,
        logout
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};


export default AuthProvider;