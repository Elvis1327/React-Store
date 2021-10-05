import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from '../components/shared/Home';
import { Navbar } from '../components/shared/Navbar';
import { AuthRoute } from './AuthRoute';
import { StoreRoute } from './StoreRoute';
import { NotFoundPage } from '../components/shared/NotFoundPage';

export const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRoute} />
                    <Route path="/store" component={StoreRoute} /> 
                    <Route exact path="/" component={Home} />
                    <Route exact path="*" component={NotFoundPage} />
                </Switch>
            </div>
        </Router>
    );
};



