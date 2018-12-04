import * as React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage, ArticlePage, ProjectPage, AbilityPage, StorePage, ErrorPage, AboutAuthorPage } from 'src/pages';

export const RouteApp = () => (
  <Switch>
    <Route exact={true} path="/" component={MainPage} />
    <Route path="/technology" component={ArticlePage} />
    <Route path="/psychology" component={ArticlePage} />
    <Route path="/motivation" component={ArticlePage} />
    <Route path="/technology" component={ArticlePage} />
    <Route path="/psychology" component={ArticlePage} />
    <Route path="/projects" component={ProjectPage} />
    <Route path="/abilities" component={AbilityPage} />
    <Route path="/store" component={StorePage} />
    <Route path="/login" component={StorePage} />
    <Route path="/about" component={AboutAuthorPage} />
    <Route component={ErrorPage}/>
  </Switch>
);