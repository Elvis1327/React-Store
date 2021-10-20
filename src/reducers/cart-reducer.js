import { TYPES } from '../types/TYPES';
const initialState = {
    cart: localStorage.getItem('products-cart') 
        ? JSON.parse(localStorage.getItem('products-cart'))
        : [] 
};

export const productsCartReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.getAllCart:
            return {
                ...state,
                cart: [...action.payload]
            }
        case TYPES.addToCart:
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case TYPES.clearCart:
            return {
                ...state,
                cart: state.cart.filter(item => item.length <= 0)
            }
        default:
            return state;
    }
}

