import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => (
                (isAuthenticated === true)
                ? <Component {...props} />
                : <Redirect to="/auth/login" />
            )}
        />
    );
};
PrivateRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired
};




