import * as React from 'react';
import { Route, Switch } from 'react-router';
import  MainPage  from '../pages/MainPage';
import ArticlePage from 'src/pages/ArticlePage';
import StorePage from 'src/pages/StorePage';
import ErrorPage from 'src/pages/Error404';

export const Application = () => (
  <Switch>
    <Route exact={true} path="/" component={MainPage} />
    <Route exact={true} path="/technology" component={ArticlePage} />
    <Route exact={true} path="/psychology" component={ArticlePage} />
    <Route exact={true} path="/motivation" component={ArticlePage} />
    <Route exact={true} path="/store" component={StorePage} />
    <Route exact={true} path="/login" component={StorePage} />
    <Route component={ErrorPage}/>
  </Switch>
);