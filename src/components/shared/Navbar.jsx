import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavbarIn from './NavbarIn';

export const Navbar = () => {
    const { check } = useSelector(state => state.auth);
    console.log(check)

    const [ toggleResponsive, setToggleResponsive ] = useState(false);

    return (
        <>
        {check === false
            ?
            <header className="_main-header">
                <Link to="/" className="principal-h1">The Authentic Corner</Link>
                <div className="navbar">
                    <Link to="/auth/login" className="navbar-links">Login</Link>
                    <Link to="/auth/register" className="navbar-links">Register</Link>
                </div>
                <button 
                    className="responsive-button-menu"
                    onClick={() => setToggleResponsive(!toggleResponsive)}
                >
                    <i class="fas fa-bars"></i>
                </button>
                <div 
                    className={ toggleResponsive ? 'navbar-responsive' : 'navbar-responsive-out' }
                >
                    <Link 
                        to="/auth/login" 
                        className={ toggleResponsive ? 'navbar-links' : 'navbar-links-out' }
                        onClick={() => setToggleResponsive(false)}
                    >
                            Login
                    </Link>
                    <Link 
                        to="/auth/register" 
                        className={ toggleResponsive ? 'navbar-links' : 'navbar-links-out' }
                        onClick={() => setToggleResponsive(false)}
                    >
                            Register
                    </Link>
                </div>
            </header>
            :
            <NavbarIn />
        }
        </>
    )
}


