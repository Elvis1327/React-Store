import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCartAction } from '../../actions/cart-actions';

const TotalCart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector(state => state.cartProducts);

    const returnPriceProducts = (n) => {
        const data = n.reduce((acc, obj) => {
            return acc += obj.price
        },0);
        return data;
    };
    const resp = returnPriceProducts(cart);

    const handleRemoveCart = () => {
        dispatch(clearCartAction())
    }

    return (
        <div className="total-price-products-cart">
            <h1 className="products-cart-count">{`TOTAL (${cart.length} Produtos: US$${resp.toFixed(2)})`}</h1>
            <button className="button-proceder-al-pago">
                Proceder al pago
            </button>
            <button 
                className="vaciar-cart"
                onClick={handleRemoveCart}
            >
                Vaciar Cart
            </button>
        </div>
    )
};

export default TotalCart;

