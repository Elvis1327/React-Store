import React from 'react';

export const StoreCart = () => {

    const carrito = JSON.parse(localStorage.getItem('products-cart')) || [];
    console.log(carrito.length)
    return (
        <h1>Hola Mundo</h1>
    )
}
