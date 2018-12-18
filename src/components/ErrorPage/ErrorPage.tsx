import * as React from 'react';
import './errorPage.scss'

export default class ErrorPageComp extends React.Component {    
  public render() {
    return (
      <div className="errorPage">
        <img src="/images/components/404Error.gif" alt=""/>
        <div>
            <h1>Its 404 Page :)</h1>
            <p>Something went wrong if you came here.</p>
            <p>Please if you like, talk to us about this problem.</p>
        </div>
      </div>
    );
  }
}


