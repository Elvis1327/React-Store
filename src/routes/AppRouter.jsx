import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Home } from '../components/shared/Home';
import { Navbar } from '../components/shared/Navbar';
import { AuthRoute } from './AuthRoute';
import { StoreRoute } from './StoreRoute';
import { NotFoundPage } from '../components/shared/NotFoundPage';
import { PrivateRoute } from '../routes/PrivateRoute';
import {PublicRoute} from './PublicRoute';
import { authValidateToken } from '../actions/auth-actions';

export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authValidateToken());
    },[dispatch]);
    
    return (
        <BrowserRouter>
            <Navbar />
            <div>
                <Routes>
                    <Route
                        path="/auth/*" 
                        element={
                            <PublicRoute>
                                <AuthRoute />
                            </PublicRoute>
                        }
                    />
                    <Route 
                        path="/store/*"
                        element={
                            <PrivateRoute>
                                <StoreRoute />
                            </PrivateRoute>
                        }
                    /> 
                    <Route 
                        path="/" 
                        element={<Home  />} 
                    />
                    <Route  
                        path="*" 
                        element={<NotFoundPage  />} 
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};



