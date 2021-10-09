import { TYPES } from '../types/TYPES';

const initialState = {
    products: [],
    loading: true,
    product: {}
};

export const storeReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.allProducts:
            return {
                ...state,
                products: action.payload
            };
        case TYPES.oneProductStore:
            return {
                ...state,
                product: action.payload
            };
        default:
            return state;
    };
};

