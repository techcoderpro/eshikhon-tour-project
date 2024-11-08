import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => { 
    return ( 
        <nav className='text-white bg-indigo-950 py-5'> 
            <ul style={{ 
                display: 'flex', listStyleType: 'none', 
                justifyContent: '', 
                width: '80%', margin: '0 auto', fontSize: '28px' 
            }}> 
                <li className='w-[200px] text-center hover:bg-indigo-900 hover:font-semibold transition-all rounded-lg cursor-pointer py-1'> 
                    <Link to="/">Tours</Link> 
                </li> 
                <li className='w-[200px] text-center hover:bg-indigo-900 hover:font-semibold transition-all rounded-lg cursor-pointer py-1'>
                    <Link to="/login">Login</Link>
                </li>
                <li className='w-[200px] text-center hover:bg-indigo-900 hover:font-semibold transition-all rounded-lg cursor-pointer py-1'>
                    <Link to="/registration">Registration</Link>
                </li>
            </ul> 
        </nav>
    );
};

export default Navbar; 