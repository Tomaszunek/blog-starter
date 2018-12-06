import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ProductActions } from '../actions';
import { ArticleFiltes } from '../models';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import MainPageComp from 'src/components/MainPage/MainPageComp';

const FILTER_VALUES = (Object.keys(ArticleFiltes.Filter) as 
  (keyof typeof ArticleFiltes.Filter)[]).map(
  (key) => ArticleFiltes.Filter[key]
);


export namespace StorePage {
  export interface IProps extends RouteComponentProps<void> {
    articles: RootState.ArticleState;
    actions: ProductActions;
    filter: ArticleFiltes.Filter;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<StorePage.IProps, 'articles' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { articles: state.articles, filter };
  },  
  (dispatch: Dispatch): Pick<StorePage.IProps, 'actions'> => ({
    actions: bindActionCreators(omit(ProductActions, 'Type'), dispatch)
  })
)

export default class StorePage extends React.Component<StorePage.IProps> {
  public componentDidMount() {
    this.fetchProductContent();
  }    
  public render() {
    return (
      <MainPageComp/>
    );
  }
public fetchProductContent = () => {    
  const { actions } = this.props;
  // actions.fetchMPContentRequest({name: "abc"})
  return fetch('http://localhost:3002/api/products')
  .then(res => res.json())
  .then(body => {
    actions.fetchProductSuccess(body)
  })
  .catch(err => console.log(err))
  } 
}


