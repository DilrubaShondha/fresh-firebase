import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';
const Home = () => {
    const value = useContext(authContext)
    console.log(value);
     const {handleGoogleLogin,
        handleGithubLogin,handleLogOut} = value;
    
    return (
        <div>
            <button onClick={handleGoogleLogin}>Log In</button>
            <button onClick={handleGithubLogin}>Github Log In</button>
            <button onClick={handleLogOut}>Log Out</button>

        </div>
    );
};

export default Home;