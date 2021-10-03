import axios from 'axios';

const URL = 'https://fakestoreapi.com/';

// GET ALL PRODUCTS
export const getDataStoreFetch = async () => {
    const { data } = await axios.get(`${URL}/products`);
    return data;
};
// GET ONE PRODUCT
export const getOneProductFetch = async (id) => {
    const { data } = await axios.get(`${URL}/products/${id}`);
    return data;
};




