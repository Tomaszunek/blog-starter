import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouteApp } from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(   
    <RouteApp />,  
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();