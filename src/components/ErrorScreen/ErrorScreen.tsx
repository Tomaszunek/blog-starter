import * as React from 'react';
import './errorScreen.scss'

export default class ErrorScreen extends React.Component {    
  public render() {
    return (
      <div className="errorScreen">
        <img src="/images/components/404Error.gif" alt=""/>
      </div>
    );
  }
}


