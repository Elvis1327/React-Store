import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { logoutAction } from '../../actions/auth-actions';

const NavbarIn = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cartProducts);
    
    const handleLogout = () => {
        dispatch(logoutAction());
    };

    return (
        <header className="_main-header">
            <Link to="/" className="principal-h1">The Authentic Corner</Link>
            <div className="navbar">
                <Link className="navbar-links-cart" to="/store/cart">
                <i className="fas fa-cart-plus container-float">
                    <div className="_container-float-cart-count">
                        {cart.length}
                    </div>
                </i>
                </Link>
                <Link to="/store/products" className="navbar-links">Products</Link>
                <button onClick={handleLogout} className="navbar-links-button">Logout</button>
            </div>
        </header>
    )
}

export default NavbarIn;



