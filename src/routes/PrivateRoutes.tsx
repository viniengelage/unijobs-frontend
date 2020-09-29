import React from 'react';

import {
  Redirect,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
} from 'react-router-dom';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const PrivateRoutes: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const isLogged = !!localStorage.getItem('@UniJobs:token');
  return isLogged ? (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoutes;
