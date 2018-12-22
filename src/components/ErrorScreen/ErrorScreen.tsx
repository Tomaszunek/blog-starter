import * as React from 'react';
import './errorScreen.scss'

export default class ErrorScreen extends React.Component<IErrorScreen, any> {    
  public render() {
    return (
      <div className="errorScreen">
        ErrorScreen
      </div>
    );
  }
}

interface IErrorScreen {
  showError: boolean
}


