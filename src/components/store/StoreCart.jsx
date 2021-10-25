import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsCartAction } from '../../actions/cart-actions';
import TotalCart from './TotalCart';
import { Link } from 'react-router-dom';

export const StoreCart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cartProducts);

    useEffect(() => {
        dispatch(getProductsCartAction());
    },[dispatch]);



    return ( 
        <div className="main-container-cart-shopping">
            <div className="all-cart-items">
                <h1>Carrito</h1>
                <hr />
                <div className="all-items-in-cart">
                {cart.map((items, idx) => (
                    <div 
                        className="item-cart-container"
                        key={idx}
                    >
                        <div className="item-cart-img-product">
                            <img src={items.image} alt="pic-item" />
                        </div>
                        <div className="item-cart-info-product">
                            <h1 className="about-product-in-cart">
                                {items.title}
                            </h1>
                            <span 
                                className="about-product-price-cart"
                                style={{fontFamily: 'Poppins'}}
                            >
                                {`USD$${items.price}`}
                            </span>
                            <span 
                                className={items?.rating?.count <= 100 
                                    ? 'about-product-quedan-cart'
                                    : 'about-product-disponible-cart'}
                            >
                                {items?.rating?.count <= 100 ? `Solo quedan ${items?.rating?.count}` : 'Disponible'  }
                            </span>
                            <div className="about-product-buttons-cart">
                                <Link to={`/store/product/${items.id}`} className="about-product-vermas-cart">Ver producto</Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
            <TotalCart />
        </div>
    )
}
