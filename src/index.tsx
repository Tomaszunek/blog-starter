import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Application } from './router';
import { configureStore } from './store';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router';
import Navigation from 'src/pages/Navigation';
import Footer from 'src/pages/Footer';
import './index.scss';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>    
    <Router history={history}>
      <div>
        <Navigation/>
          <Switch>
            <Application />
          </Switch>
        <Footer/>
      </div>
    </Router>   
  </Provider>,  
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();