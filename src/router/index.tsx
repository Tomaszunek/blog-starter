import * as React from 'react';
import { Route, Switch } from 'react-router';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import { Provider } from 'react-redux';
import { configureStore } from '../store';

import { MainPage, ArticlePage, ProjectPage, 
  AbilityPage, StorePage, ErrorPage, 
  AboutAuthorPage, ArticleSinglePage, ProductSinglePage } from '../pages';

import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import '../index.scss';
  
  
  
  const store = configureStore();
  const history = createBrowserHistory();

export const RouteApp = () => (
  <Provider store={store}>   
    <Router history={history}>
      <div>
        <LoadingScreen showLoading={false}/>
        <ErrorScreen/>
        <Navigation/>
          <div className="container">
            <Switch>
              <Route exact={true} path="/" component={MainPage} />
              <Route exact={true} path="/articles" component={ArticlePage} />
              <Route path="/article/:type/:slug" component={ArticleSinglePage} /> 
              <Route path="/articles/:type" component={ArticlePage} />    
              <Route path="/projects" component={ProjectPage} />
              <Route path="/abilities" component={AbilityPage} />
              <Route path="/products" component={StorePage} />
              <Route path="/product/:slug" component={ProductSinglePage} /> 
              <Route path="/login" component={StorePage} />
              <Route path="/about" component={AboutAuthorPage} />
              <Route component={ErrorPage}/>
            </Switch>
          </div>          
        <Footer/>
      </div>
    </Router>
  </Provider>
      
);
