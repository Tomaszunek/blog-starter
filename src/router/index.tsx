import * as React from 'react';
import { Route, Switch } from 'react-router';
import { MainPage, ArticlePage, ProjectPage, 
        AbilityPage, StorePage, ErrorPage, 
        AboutAuthorPage, ArticleSinglePage, ProductSinglePage } from 'src/pages';


export const RouteApp = () => (
  <Switch>
    <Route exact={true} path="/" component={MainPage} />
    <Route exact={true} path="/articles" component={ArticlePage} />
    <Route path="/articles/:type/:slug" component={ArticleSinglePage} /> 
    <Route path="/articles/:type" component={ArticlePage} />    
    <Route path="/projects" component={ProjectPage} />
    <Route path="/abilities" component={AbilityPage} />
    <Route path="/products" component={StorePage} />
    <Route path="/product/:slug" component={ProductSinglePage} /> 
    <Route path="/login" component={StorePage} />
    <Route path="/about" component={AboutAuthorPage} />
    <Route component={ErrorPage}/>
  </Switch>
);