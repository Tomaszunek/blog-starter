import * as React from 'react';
import './loginPage.scss'
import LoginForm from './LoginForm/LoginForm';
import RegisterForm from './RegisterForm/RegisterForm';

export default class LoginPageComp extends React.Component<any, any> {    
  public render() {
    return (
      <div className="loginPage">
        <RegisterForm/>
        <LoginForm/>
      </div>
    );
  }
}


