import React from 'react';
import { useLocation } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = sessionStorage.getItem('accessToken');
  const location = useLocation();

  if (isAuthenticated) {
    return <Component {...rest} />;
  } else {
    window.location.href = `${process.env.REACT_APP_GOOGLE_OAUTH_BASE_URL}/o/oauth2/auth?client_id=${process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_CLIENT_BASE_URL}/loading&response_type=code&scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`;
    return null;
  }
}

export default PrivateRoute;
