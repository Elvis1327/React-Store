import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProductsAction } from '../../actions/storeActions';

export const Home = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.store);

    useEffect(() => {
        dispatch(getAllProductsAction());
    }, [dispatch]);

    // RETORNAR 3 PRODUCTOS
    const returnThreeProducts = () => {
        const data = products.filter(product => product.id <= 3);
        return data;
    }
    const threeProducts = returnThreeProducts();

    // LOADING CONDICIONAL

    return (
        <section className="main-container-home">
            <h1>Los Mejores Precios.</h1>

            {loading === true
                ?
                <div className="loading-parent-3-products">
                    <div className="loading-child-3-products"></div>
                </div>
                :
                <div className="main-cards-products">
                    {threeProducts.map(product => (
                        <div className="_product-card" key={product.id}>
                            <img src={product.image} alt="product-pic" className="_product-image" />
                            <h1 className="_product-title">{product.title}</h1>
                            <p>
                                {`${product.description.substr(0, 25)}....`}
                            </p>
                            <Link to="/store/products">View All Products</Link>
                        </div>
                    ))};
                </div>

            }


        </section>
    );
};





