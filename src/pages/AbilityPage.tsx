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


export namespace AbilityPage {
  export interface IProps extends RouteComponentProps<void> {
    articles: RootState.ArticleState;
    products: RootState.ProductState;
    actions: ArticleActions;
    filter: ArticleFiltes.Filter;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<AbilityPage.IProps, 'articles' | 'products' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { articles: state.articles, products: state.products, filter };
  },  
  (dispatch: Dispatch): Pick<AbilityPage.IProps, 'actions'> => ({
    actions: bindActionCreators(omit(ArticleActions, 'Type'), dispatch)
  })
)

export default class AbilityPage extends React.Component<AbilityPage.IProps> {     
  public render() {
    const { articles } = this.props; 
    return (
      <MainPageComp articles={articles}/>
    );
  }
}


