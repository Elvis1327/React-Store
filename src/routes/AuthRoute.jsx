import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';
import { NotFoundPage } from '../components/shared/NotFoundPage';

export const AuthRoute = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};





