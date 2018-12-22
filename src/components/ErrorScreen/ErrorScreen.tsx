import * as React from 'react';
import { IRootState, RootState } from '../../reducers';
import { connect } from 'react-redux';
import './errorScreen.scss'


namespace ErrorScreen {
  export interface IProps {    
    appSystem: RootState.AppSystemState;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<ErrorScreen.IProps, 'appSystem'> => {
    return { appSystem: state.appSystem };
  }
)

export default class ErrorScreen extends React.Component<ErrorScreen.IProps, any> {    
  public render() {
    return (
      <div className="errorScreen">
        ErrorScreen
      </div>
    );
  }
}




