import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProductsAction } from '../../actions/storeActions';
import { addProductCartAction } from '../../actions/cart-actions';

export const AllProducts = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.store);
    useEffect(() => {
        dispatch(getAllProductsAction());
    }, [dispatch]);
    
    const handleProductCart = (product) => {
        dispatch(addProductCartAction(product));
    }

    return (
        <div className="_main-container-allproducts">
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <h1 className="_all-products">All Products</h1>
            </div>
            <div className="_products-cards">
                {products.map((product)=> (
                    <div className="_products-card" key={product.id}>
                        <img className="_products-image" src={product.image} alt="pic" />
                        <h1 className="_products-name">{product.title}</h1>
                        <p>
                            <strong className="_products-price-strong">Price: </strong>
                            <span>{product.price}</span>
                        </p>
                        <div className="_products-buttons">
                            <Link to={`/store/product/${product.id}`}>See More</Link>
                            <button 
                                className="_products-add-card"
                                onClick={() => handleProductCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

