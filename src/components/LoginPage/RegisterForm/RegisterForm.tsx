import * as React from 'react';

export default class RegisterForm extends React.Component<any, any> {    
  public render() {
    return (
      <div className="registerForm">
        <form action="">
          <span>Username</span>
          <input type="username"/>
          <p>This will be your username.</p>
          <span>Email</span>
          <input type="email"/>
          <p>We’ll occasionally send updates about your account to this inbox. We’ll never share your email address with anyone.</p>
          <span>Password</span>
          <input type="password"/>
          <p>Make sure it's more than 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
          <button className="sign-up" type="submit">Create an account</button>
        </form>      
      </div>
    );
  }
}


