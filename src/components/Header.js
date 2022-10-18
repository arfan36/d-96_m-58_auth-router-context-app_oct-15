import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return [
        <div className="navbar bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Awesome Auth</Link>
            <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Log in</Link>
            <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
        </div>
    ];
};

export default Header;