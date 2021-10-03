import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../components/shared/Home';
import { Navbar } from '../components/shared/Navbar';
import { AuthRoute } from './AuthRoute';
import { StoreRoute } from './StoreRoute';

export const AppRouter = () => {
    return (
        //TODO: ME FALTA AGREGAR LA TURA 404
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRoute} />
                    <Route path="/store" component={StoreRoute} /> 
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
};



