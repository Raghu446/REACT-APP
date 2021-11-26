import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithLayout = (props) => {
  const {  Layout,  Component, session, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayout;
