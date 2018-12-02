import * as React from 'react';
import { Route, Switch } from 'react-router';
import  MainPage  from '../pages/MainPage';
import ArticlePage from 'src/pages/ArticlePage';
import StorePage from 'src/pages/StorePage';
import ErrorPage from 'src/pages/Error404';

export const RouteApp = () => (
  <Switch>
    <Route exact={true} path="/" component={MainPage} />
    <Route path="/technology" component={ArticlePage} />
    <Route path="/psychology" component={ArticlePage} />
    <Route path="/motivation" component={ArticlePage} />
    <Route path="/store" component={StorePage} />
    <Route path="/login" component={StorePage} />
    <Route component={ErrorPage}/>
  </Switch>
);