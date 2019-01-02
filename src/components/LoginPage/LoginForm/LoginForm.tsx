import * as React from 'react';

export default class LoginForm extends React.Component<any, any> {    
  public render() {
    return (
      <div className="loginForm">
        <form action="">
          <span>Username</span>
          <input type="username"/>
          <span>Password</span>          
          <input type="password"/>
          <button className="sign-in"  type="submit" >Sign in</button>
          <a href="">Forgot password?</a>
        </form>      
      </div>
    );
  }
}


