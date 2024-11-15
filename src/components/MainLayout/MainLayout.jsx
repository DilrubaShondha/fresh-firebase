import React, { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import auth from '../firebase.init';

// Create the auth context
export const authContext = createContext();

const MainLayout = () => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Google Login Handler
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
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                console.error('GitHub Login Error:', error.message);
            });
    };

    const handleLogOut = () =>{
        signOut(auth)
        .then(res => console.log(res))
    }
    useEffect(()=>{
        console.log(user);
    },
    [user])
    useEffect(()=>
        {
            onAuthStateChanged(auth, (currentUser)=>{
                console.log(currentUser);
            })

        },[])

    // Context data to share across components
    const authData = {
        handleGoogleLogin,
        handleGithubLogin,
        user,
        setUser,
        handleLogOut
    };

    return (
        <authContext.Provider value={authData}>
            <div>
                <header>
                    <h1>Welcome to the App</h1>
                </header>
                <main>
                    <Outlet />
                </main>
                <footer>
                    <p>Footer Content</p>
                </footer>
            </div>
        </authContext.Provider>
    );
};

export default MainLayout;
