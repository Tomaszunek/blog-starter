
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RouteApp } from './router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RouteApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
