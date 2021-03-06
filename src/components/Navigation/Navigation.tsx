import * as React from 'react';
import { NavLink }  from 'react-router-dom';
import Links from './navLinks';

import './navigation.scss';
import BurgerMenu from './BurgerMenu';

export default class Navigation extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);

    this.state = {
        navBar: ''
    };        
}    

  
  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
}

  public componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  public handleScroll = () => { 
      this.setState({ 
        navBar: (window.pageYOffset > 100 ? 'navigation scrolled' : ''), 
      });
  }
  public render() {
    return (
      <nav className={this.state.navBar}>
        <NavLink to="/" className='logo'>
          <span>
            prohuman {(process.env.serv_type ===  "blog" ? "blog" : "games")}
          </span>
        </NavLink>
        <Links/>
        <div className="login">
          <NavLink to="/login">login</NavLink>
        </div>
        <BurgerMenu/>
      </nav>
    );
  }
}
interface IState {
  navBar: string
}