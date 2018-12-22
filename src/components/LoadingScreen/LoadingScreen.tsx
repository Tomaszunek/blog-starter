import * as React from 'react';
import './loadingScreen.scss'
import { IRootState, RootState } from '../../reducers';
import { connect } from 'react-redux';

namespace LoadingScreen {
  export interface IProps {    
    appSystem: RootState.AppSystemState;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<LoadingScreen.IProps, 'appSystem'> => {
    return { appSystem: state.appSystem };
  }
)

export default class LoadingScreen extends React.Component<LoadingScreen.IProps> {
  public render() {
    const { loading } = this.props.appSystem;
    return (
      <div className={"loadingScreen " + (loading ? "showLoading" : '')}>
        <div className="loadImage"/>
      </div>
    );
  }
}