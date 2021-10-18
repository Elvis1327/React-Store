import { combineReducers } from 'redux';
import { storeReducer } from './storeReducer';
import { productsCartReducer } from './cart-reducer';

export const rootReducer = combineReducers({
    store: storeReducer,
    cartProducts: productsCartReducer
});



