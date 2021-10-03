import { getDataStoreFetch, getOneProductFetch } from "../helpers/storeData";
import { TYPES } from "../types/TYPES.js";

// GET ALL PRODUCTS ACTION
const getAllProducts = (data) => {
    return {
        type: TYPES.allProducts,
        payload: data
    };
};
export const getAllProductsAction = () => {
    return async (dispatch) => {
        const data = await getDataStoreFetch();
        dispatch(getAllProducts(data));
    };
};

// GET ONE PRODUCT ACTION
const getOneProductStore = (product) => {
    return {
        type: TYPES.oneProductStore,
        payload: product
    };
};
export const getOneProductAction = (id) => {
    return async (dispatch) => {
        const data = await getOneProductFetch(id);
        dispatch(getOneProductStore(data));
    }
}



