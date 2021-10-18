import { TYPES } from '../types/TYPES';

const initialState = {
    products: [],
    loading: true,
    loadingOneProduct: true,
    product: {}
};

export const storeReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.allProducts:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case TYPES.oneProductStore:
            return {
                ...state,
                product: action.payload,
                loadingOneProduct: false
            };
        default:
            return state;
    };
};

