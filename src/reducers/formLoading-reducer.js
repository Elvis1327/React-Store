import { TYPES } from '../types/TYPES';

const initialState = {
    loadingForm: null
};

export const formLoadingReducer = (state = initialState, action) => {
    switch(action.type){
        case TYPES.initialLoadingForm:
            return {
                ...state,
                loadingForm: action.payload
            };
        case TYPES.finishLoadingForm:
            return {
                ...state,
                loadingForm: action.payload
            }
        default:
            return state;
    }
}



