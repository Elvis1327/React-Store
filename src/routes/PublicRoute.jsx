import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PublicRoute = ({component: Component, isAuthenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props)=> (
                (isAuthenticated === false)
                ? <Component {...props} />
                : <Redirect to="/store/products" />
            )}
        />
    )
};
PublicRoute.prototype = {
    isAuthenticated: PropTypes.bool.isRequired
};
