import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ProductActions, AppSystemActions } from '../actions';
import { ArticleFiltes } from '../models';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import StorePageComp from '../components/StorePage/StorePageComp';

const FILTER_VALUES = (Object.keys(ArticleFiltes.Filter) as 
  (keyof typeof ArticleFiltes.Filter)[]).map(
  (key) => ArticleFiltes.Filter[key]
);


export namespace StorePage {
  export interface IProps extends RouteComponentProps<void> {
    products: RootState.ProductsState;
    actions: ProductActions;
    systemActions: AppSystemActions;
    filter: ArticleFiltes.Filter;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<StorePage.IProps, 'products' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { products: state.products, filter };
  },  
  (dispatch: Dispatch): Pick<StorePage.IProps, 'actions' | 'systemActions'> => ({
    actions: bindActionCreators(omit(ProductActions, 'Type'), dispatch),
    systemActions: bindActionCreators(omit(AppSystemActions, 'Type'), dispatch),
  })
)

export default class StorePage extends React.Component<StorePage.IProps> {
  public componentDidMount() {
    this.fetchProductContent();
  }    
  public render() {
    const { products } = this.props;
    return (
      <StorePageComp products={products} match={this.props.match}/>
    );
  }
  public fetchProductContent = () => {    
    const { actions, systemActions } = this.props;
    systemActions.loadingStart({loading: true})
    return fetch(`${process.env.api_path}/products`)
    .then(res => res.json())
    .then(body => {
      actions.fetchProductsSuccess(body)
      systemActions.loadingEnd({loading: false})
    })
    .catch(err => console.log(err))
  } 
}


