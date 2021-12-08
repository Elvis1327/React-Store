import React, { useEffect }  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOneProductAction } from '../../actions/storeActions';

export const OneProduct = () => {

    const dispatch = useDispatch();
    const { product, loadingOneProduct } = useSelector(state => state.store);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getOneProductAction(id))
    },[dispatch, id]);

    const handleReturnButton = () => {
        navigate(-1);
    }

if(loadingOneProduct === true){
    return <div className="loading-one-product">
                <div className="loading-one-product-snniper"></div>
            </div>
};

    return (
            <section className="_main-container-product">
                <div className="_container-product">
                    <div className="_product-img">
                        <img className="_product-img-img" src={product.image} alt="pic-product" />
                    </div>
                    <div className="_product-info">
                        <h1 className="_one-product-name">{product.title}</h1>
                        <p className="_product-description">
                        <p style={{color: '#26BE96', margin: '0px'}}>About:</p>
                            {product.description}
                        </p>
                        <span className="_product-price"> <strong className="_product-strong-price">Price: </strong>{product.price}</span>
                        <div className="_product-buttons">
                            <button onClick={handleReturnButton} className="_button-volver-atras">
                                Volver Atras
                            </button>
                            <button className="_product-add-cart">
                                Agregar Al Carrito 
                            </button>
                        </div>
                    </div>
                </div>
            </section>
    );
};

