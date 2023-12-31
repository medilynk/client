import React from 'react';
import {Link, NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className='w-full'>
            <Link to='/' className="logo">
                Medilynk
            </Link>
            <div className="buttons">
                <button>Login</button>
                <button>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
