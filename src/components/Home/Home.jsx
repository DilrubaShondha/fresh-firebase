import React, { useContext } from 'react';
import { authContext } from '../MainLayout/MainLayout';
const Home = () => {
    const value = useContext(authContext)
    console.log(value);
     const {handleGoogleLogin,
        handleGithubLogin,handleLogOut} = value;
    
    return (
        <div>
            <button className='btn' onClick={handleGoogleLogin}>Log In</button>
            <button className='btn' onClick={handleGithubLogin}>Github Log In</button>
            <button className='btn' onClick={handleLogOut}>Log Out</button>

        </div>
    );
};

export default Home;