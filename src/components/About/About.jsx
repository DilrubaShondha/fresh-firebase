import React, { useContext } from 'react';
import { getAuth } from "firebase/auth";
import { authContext } from '../MainLayout/MainLayout';

const About = () => {
    const {user, setUser} = useContext(authContext)

    const value = useContext(authContext)
    console.log(value);
    return (
        <div>
            {user?.displayName}
            {user?.email}

        </div>
    );
};

export default About;