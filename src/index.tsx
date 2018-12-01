import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Application } from './router';
import { configureStore } from './store';
import { createBrowserHistory } from 'history';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router';
import Navigation from './components/Navigation/Navigation';
import Footer from 'src/components/Footer/Footer';
import './index.scss';
import LoadingScreen from 'src/components/LoadingScreen/LoadingScreen';
import ErrorScreen from 'src/components/ErrorScreen/ErrorScreen';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>    
    <Router history={history}>
      <div>
        <LoadingScreen/>
        <ErrorScreen/>
        <Navigation/>
          <div className="container">
            <Switch>
              <Application />
            </Switch>
          </div>          
        <Footer/>
      </div>
    </Router>   
  </Provider>,  
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();