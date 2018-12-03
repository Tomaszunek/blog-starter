import * as React from 'react';
import './fullScreenCont.scss'

export default class FullScreenCont extends React.Component {
  public render() {
    return (
      <div className="fullScreenCont">
        {this.props.children}
      </div>
    );
  }
}
