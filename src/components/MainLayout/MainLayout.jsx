import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase.init';
import Navbar from '../Navbar/Navbar';

// Create the auth context
export const authContext = createContext();

const MainLayout = () => {
    const [user, setUser] = useState(null)

    // Google Login Handler

    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                
            })
            .catch((error) => {
                console.error('Google Login Error:', error.message);
            });
    };

    // GitHub Login Handler
    const githubProvider = new GithubAuthProvider();
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.error('GitHub Login Error:', error.message);
            });
    };
    
    //Log Out Handler
    const handleLogOut = () =>{
        signOut(auth)
        .then(res => console.log(res))
    }
    useEffect(()=>{
        console.log('state', user);
    },
    [user])

    //Hold Current User to show user
    useEffect(()=>
        {
           const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser);
            });
            return () =>{
                unSubscribe()
            } 

        },[])

        //signup handler

        const handleSignUp =(email, password) =>{
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))

        }
        const handleSignIn =(email, password) =>{
            signInWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))

        }

    // Context data to share across components
    const authData = {
        handleGoogleLogin,
        handleGithubLogin,
        user,
        setUser,
        handleLogOut,
        handleSignUp,
        handleSignIn
    };

    return (
        <authContext.Provider value={authData}>
            <div>
               <Navbar/>
                    <Outlet />
                
            </div>
        </authContext.Provider>
    );
};

export default MainLayout;
