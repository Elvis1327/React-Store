import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarIn from './NavbarIn';

export const Navbar = () => {
    const { cart } = useSelector(state => state.cartProducts);
    const { check } = useSelector(state => state.auth);
    return (
        <>
        {check === false
            ?
            <header className="_main-header">
                <Link to="/" className="principal-h1">The Authentic Corner</Link>
                <div className="navbar">
                    <Link className="navbar-links" to="/store/cart">
                    <i className="fas fa-cart-plus container-float">
                        <div className="_container-float-cart-count">
                            {cart.length}
                        </div>
                    </i>
                    </Link>
                    <Link to="/auth/login" className="navbar-links">Login</Link>
                    <Link to="/auth/register" className="navbar-links">Register</Link>
                </div>
            </header>
            :
            <NavbarIn />
        }
        </>
    )
}


