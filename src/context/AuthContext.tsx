import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    User as FirebaseAuthUser
} from "firebase/auth";

interface AuthContextType {
    currUser: FirebaseAuthUser | null;
}

const AuthContext = createContext<AuthContextType>({ currUser: null });
export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currUser, setCurrUser] = useState<FirebaseAuthUser | null>(null);

    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrUser(user);
        });
        return unsubscribe;
    }, []);

    const value = { currUser, signup };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
}
/* 
import React, { createContext, useContext, useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext<unknown>(null);
export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [currUser, setCurrUser] = useState();

    function signup(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    auth.onAuthStateChanged((user) => {
        setCurrUser(user);
    });

    const value = { currUser };
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
} */
