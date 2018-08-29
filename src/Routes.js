import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Auth from './Auth';

export default ({ active }) => (
  <Switch>
    <Route exact path="/sign_in" component={Auth} />
    <Route exact path="/sign_up" component={Auth} />
  </Switch>
);
