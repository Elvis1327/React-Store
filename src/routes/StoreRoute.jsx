import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFoundPage } from '../components/shared/NotFoundPage';
import { AllProducts } from '../components/store/AllProducts'
import { OneProduct } from '../components/store/OneProduct';
import { StoreCart } from '../components/store/StoreCart';

export const StoreRoute = () => {
    
    return (
        <Switch>
            <Route exact path="/store/products" component={AllProducts} />
            <Route exact path="/store/product/:id" component={OneProduct} />
            <Route exact path="/store/cart" component={StoreCart} />
            <Route exact path="*" component={NotFoundPage} />
        </Switch>
    )
}


