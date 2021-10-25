import { TYPES } from '../types/TYPES';
import Swal from 'sweetalert2';
let cart = [];

// ADD TO THE CART
const addProductCart = (product) => {
    return {
        type: TYPES.addToCart,
        payload: product
    };
};
export const addProductCartAction = (product) => {
    return async (dispatch) => {
    cart.push(product)
    localStorage.setItem('products-cart', JSON.stringify(cart));
    const resp = JSON.parse(localStorage.getItem('products-cart')) || [];
        dispatch(addProductCart(resp));
    };
};
// GET ALL PRODUCTS CART
const getProductsCart = (product) => {
    return {
        type: TYPES.getAllCart,
        payload: product
    };
};
export const getProductsCartAction = () => {
    return async (dispatch) => {
        const data = JSON.parse(localStorage.getItem('products-cart')) || [];
        dispatch(getProductsCart(data));
    };
};
// CLEAR CART
const clearCart = (cart) => {
    return {
        type: TYPES.clearCart,
        payload: cart
    };
};
export const clearCartAction = () => {
    return async (dispatch) => {
        const clear = localStorage.removeItem('products-cart') || [];
        const resp = await Swal.fire({
            title: 'Are you sure?',
            text: "If you remove all items you can't reverse it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Remove all items!',
            cancelButtonText: 'No, cancel!',
        });
        if(resp.isConfirmed){
            cart.splice(0,100);
            dispatch(clearCart(clear));
        };
    }
}


