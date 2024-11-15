import React, { useContext } from 'react';
import { getAuth } from "firebase/auth";
import { authContext } from '../MainLayout/MainLayout';

const About = () => {

    const value = useContext(authContext)
    console.log(value);
    return (
        <div>
            <h1>ABout page</h1>
        </div>
    );
};

export default About;