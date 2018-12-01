import * as React from 'react';
import { Route, Switch } from 'react-router';
import  MainPage  from '../pages/MainPage';

export const Application = () => (
  <Switch>
    <Route path="/" component={MainPage} />
  </Switch>
);