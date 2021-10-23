// REACT UTILIRIES
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// REACT COMPONENTS AND UTILIRIES
import { authValidateToken } from '../actions/auth-actions'; 
import { Home } from '../components/shared/Home';
import { Navbar } from '../components/shared/Navbar';
import { AuthRoute } from './AuthRoute';
import { StoreRoute } from './StoreRoute';
import { NotFoundPage } from '../components/shared/NotFoundPage';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const { check } = useSelector(state => state.auth);

    useEffect(() => {
        dispatch(authValidateToken());
    },[dispatch]); 
    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth" 
                        component={AuthRoute}
                        isAuthenticated={check}
                    />
                    <PrivateRoute 
                        path="/store" 
                        component={StoreRoute}
                        isAuthenticated={check} 
                    /> 
                    <Route 
                        exact 
                        path="/" 
                        component={Home} 
                    />
                    <Route 
                        exact 
                        path="*" 
                        omponent={NotFoundPage} 
                    />
                </Switch>
            </div>
        </Router>
    );
};



