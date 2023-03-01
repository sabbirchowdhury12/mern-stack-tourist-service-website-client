import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useToaster } from 'react-hot-toast';

export const AuthContext = createContext();

const auth = getAuth(app);



const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    //create user with email
    const createUserWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //Sign in with email
    const loginWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    //manage user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    //update user
    const updateUser = (updateInfo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, updateInfo);
    };

    //logout
    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };


    const authInfo = {
        createUserWithEmail,
        loginWithEmail,
        user,
        logout,
        updateUser,
        loading
    };


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};


export default AuthProvider;