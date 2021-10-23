import { combineReducers } from 'redux';
import { storeReducer } from './storeReducer';
import { productsCartReducer } from './cart-reducer';
import { authReducer } from './auth-reducer';
import { formLoadingReducer } from './formLoading-reducer';

export const rootReducer = combineReducers({
    store: storeReducer,
    cartProducts: productsCartReducer,
    auth: authReducer,
    formLoading: formLoadingReducer
});



