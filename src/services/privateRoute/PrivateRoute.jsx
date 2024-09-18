import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = !!sessionStorage.getItem('accessToken');

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to={{
        pathname: '/',
        state: { from: rest.location },
      }}
    />
  );
}

export default PrivateRoute;
