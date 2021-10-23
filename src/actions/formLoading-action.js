import { TYPES } from '../types/TYPES';

export const startAuthLoading = () => {
    return {
        type: TYPES.initialLoadingForm,
        payload: true
    };
};
export const finishLoadingForm = () => {
    return {
        type: TYPES.finishLoadingForm,
        payload: false
    };
};