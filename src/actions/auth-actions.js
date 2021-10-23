import { TYPES } from '../types/TYPES';
import { authLoginFetch, authRegisterFetch, validateTokenFetch } from '../helpers/authFetch';
import { finishLoadingForm, startAuthLoading } from './formLoading-action';

// LOGIN
const login = (user) => {
    return {
        type: TYPES.authLogin,
        payload: user
    };
};
export const authLoginAction = (user) => {
    return async (dispatch) => {
        try{
            dispatch(startAuthLoading());
            const data = await authLoginFetch(user);
            if(data.ok === true){
                localStorage.setItem('token', data.token);
                dispatch(login(data));
                dispatch(finishLoadingForm());
            }
        }catch(err){
            console.log(`ERROR ${err}`);
            dispatch(finishLoadingForm());
        };
    };
} ;
// REGISTER
const register = (user) => {
    return {
        type: TYPES.authRegister,
        payload: user
    };
};
export const authRegisterAction = (user) => {
    return async (dispatch ) => {
        try{
            dispatch(startAuthLoading());
            const data = await authRegisterFetch(user);
            if(data.ok === true){
                localStorage.setItem('token', data.token);
                dispatch(register(data));
                dispatch(finishLoadingForm());
            };
        }catch(err){
            console.log(`ERROR ${err}`);
            dispatch(finishLoadingForm());
        };
    };
};
// VALIDATE TOKEN AUTH
export const authValidateToken = () => {
    return async (dispatch) => {
        const resp = await validateTokenFetch();
        try{
            dispatch(login(resp.email));
            dispatch(register(resp.email))
        }catch(err){
            console.log(`ERROR ${err}`);
        }
    }
}







