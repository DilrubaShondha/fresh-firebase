import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../MainLayout/MainLayout';

const Navbar = () => {
    const {handleLogOut, user} = useContext(authContext)
    return (
        <div className='flex justify-between'>
            <NavLink to='/'>Home</NavLink> 
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/login'>Login</NavLink>
            { user &&
                  <NavLink to='/profile'>Profile</NavLink>
            }
            <button onClick={handleLogOut}>Log Out</button>

        </div>
    );
};

export default Navbar;