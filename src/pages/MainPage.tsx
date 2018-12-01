import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ArticleActions } from '../actions';
import { ArticleFiltes } from '../models';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import '../App.scss';
import MainPageComp from 'src/components/MainPage/MainPageComp';

const FILTER_VALUES = (Object.keys(ArticleFiltes.Filter) as 
  (keyof typeof ArticleFiltes.Filter)[]).map(
  (key) => ArticleFiltes.Filter[key]
);


export namespace MainPage {
  export interface IProps extends RouteComponentProps<void> {
    articles: RootState.ArticleState;
    actions: ArticleActions;
    filter: ArticleFiltes.Filter;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<MainPage.IProps, 'articles' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { articles: state.articles, filter };
  },  
  (dispatch: Dispatch): Pick<MainPage.IProps, 'actions'> => ({
    actions: bindActionCreators(omit(ArticleActions, 'Type'), dispatch)
  })
)

export default class MainPage extends React.Component<MainPage.IProps> {    
  public render() {
    return (
      <MainPageComp/>
    );
  }
}

