import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import './App.css';


export namespace App {
  export interface IProps extends RouteComponentProps<void> {
    numbers: any   
  }
}

export default class App extends React.Component<App.IProps> {    
  public render() {
    return (
      <div className="App">
        abc
      </div>
    );
  }
}


