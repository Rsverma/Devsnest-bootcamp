import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
    return (
        <nav>
           <ul className="navlinks">
               <Link to='/'>
                    <li>Home</li>
               </Link>
               <Link to='/about'>
                    <li>About</li>
               </Link>
               <Link to='/profile'>
                    <li>Profile</li>
               </Link>
               <Link to='/dashboard'>
                    <li>Dashboard</li>
               </Link>
           </ul>
        </nav>
    );
}

export default Nav;