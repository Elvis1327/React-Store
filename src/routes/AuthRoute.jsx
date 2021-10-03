import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export const AuthRoute = () => {
    return (
        <Switch>
            <Route exact path="/auth/login" component={Login} />
            <Route exact path="/auth/register" component={Register} />
        </Switch>
    );
};





