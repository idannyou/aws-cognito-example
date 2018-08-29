import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Authentication from './Authentication';

export default props => {
  return (
    <Switch>
      <Route
        exact
        path="/sign_in"
        render={routeProps => <Authentication {...{ routeProps, props }} />}
      />
      <Route
        exact
        path="/sign_up"
        render={routeProps => <Authentication {...{ routeProps, props }} />}
      />
    </Switch>
  );
};
