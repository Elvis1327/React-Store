import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <header className="_main-header">
            <Link to="/" className="principal-h1">The Authentic Corner</Link>
            <div className="navbar">
                <i style={{color: 'white', cursor: 'pointer', fontSize: '25px'}} className="fas fa-cart-plus"></i>
                <Link to="/auth/login" className="navbar-links">Login</Link>
                <Link to="/auth/register" className="navbar-links">Register</Link>
            </div>
        </header>
    )
}


