import { TYPES } from '../types/TYPES';

const initialState = {
    user: null,
    check: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.authLogin:
            return {
                ...state,
                user: action.payload.email,
                check: true
            };
        case TYPES.authRegister:
            const resp = action.payload;
            return {
                ...state,
                user: resp.email,
                check: true
            };
        case TYPES.authLogout:
            return {
                ...state,
                check: action.payload
            }
        default:
            return state;
    };
};




