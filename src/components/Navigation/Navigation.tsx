import * as React from 'react';
import Links from './navLinks';

import './navigation.scss';
import BurgerMenu from './BurgerMenu';

export default class Navigation extends React.Component {    
  public render() {
    return (
      <nav className="navigation">
        <div className="logo">
          Prohuman
        </div>
        <Links/>
        <div className="login">
          Login
        </div>
        <BurgerMenu/>
      </nav>
    );
  }
}