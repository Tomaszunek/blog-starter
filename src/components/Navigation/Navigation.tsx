import * as React from 'react';
import './navigation.scss'

export default class Navigation extends React.Component {    
  public render() {
    return (
      <nav className="naviagation">
        <div>
          Prohuman
        </div>
        <ul>
          <li>Technology</li>
          <li>Psychology</li>
          <li>Motivation</li>
          <li>Store</li>
        </ul>
        <div>
          Login
        </div>
      </nav>
    );
  }
}


