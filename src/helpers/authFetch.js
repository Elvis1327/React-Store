import axios from 'axios';

const MAIN_URL = `https://crud-practice13.herokuapp.com`;

// LOGIN Fetch
export const authLoginFetch = async (user) => {
    const { data } = await axios.post(`${MAIN_URL}/api/auth/login`, user);
    return data;
}
// REGISTER Fetch 
export const authRegisterFetch = async (user) => {
    const { data } = await axios.post(`${MAIN_URL}/api/auth/register`, user);
    return data;
};
// VALIDATE TOKEN
export const validateTokenFetch = async () => {
    const token = localStorage.getItem('token') || '';
    const { data } = await axios.get(`${MAIN_URL}/api/auth/validate-token`, {
        headers: {'x-token': token}
    });
    return data;
}




