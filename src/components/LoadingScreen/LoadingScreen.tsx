import * as React from 'react';
import './loadingScreen.scs'

export default class LoadingScreen extends React.Component<ILoadingScreenProps, any> {    
  public render() {
    const { showLoading } = this.props;
    return (
      <div className={"loadingScreen " + (showLoading ? "showLoading" : '')}>
        <div className="loadImage"/>
      </div>
    );
  }
}


interface ILoadingScreenProps {
  showLoading: boolean
}

