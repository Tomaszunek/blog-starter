import * as React from 'react';
import { NavLink }  from 'react-router-dom';
import Links from './navLinks';

import './navigation.scss';
import BurgerMenu from './BurgerMenu';

export default class Navigation extends React.Component {    
  public render() {
    return (
      <nav className="navigation">
        <div className="logo">
          <NavLink to="/">ProHuman</NavLink>
        </div>
        <Links/>
        <div className="login">
          <NavLink to="/login">login</NavLink>
        </div>
        <BurgerMenu/>
      </nav>
    );
  }
}