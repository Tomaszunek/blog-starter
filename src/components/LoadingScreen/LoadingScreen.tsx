import * as React from 'react';
import { connect } from 'react-redux';
import { IRootState, RootState } from '../../reducers';
import './loadingScreen.scss'


export namespace LoadingPage {
  export interface IProps{    
    appSystem: RootState.AppSystemState;
  }
}

@connect(
  (state: IRootState): Pick<LoadingPage.IProps, 'appSystem'> => {
    return { appSystem: state.appSystem };
  }  
)

export default class LoadingScreen extends React.Component<LoadingPage.IProps> {
  public render() {
    const { loading } = this.props.appSystem;
    return (
      <div className={"loadingScreen " + (loading ? "showLoading" : '')}>
        <div className="loadImage"/>
      </div>
    );
  }
}


