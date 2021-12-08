import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NotFoundPage } from '../components/shared/NotFoundPage';
import { AllProducts } from '../components/store/AllProducts'
import { OneProduct } from '../components/store/OneProduct';
import { StoreCart } from '../components/store/StoreCart';

export const StoreRoute = () => {
    
    return (
        <Routes>
            <Route path="products" element={<AllProducts />} />
            <Route path="product/:id" element={<OneProduct />} />
            <Route path="cart" element={<StoreCart />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};


