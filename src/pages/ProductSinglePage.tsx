import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ProductActions, AppSystemActions } from '../actions';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import ProductSinglePageComp from '../components/ProductSinglePage/productSinglePageComp';




export namespace ProductPage {
  export interface IProps extends RouteComponentProps<void> {
    product: RootState.ProductState;
    actions: ProductActions;
    systemActions: AppSystemActions;
  }
}

@connect(
  (state: IRootState): Pick<ProductPage.IProps, 'product'> => {
    return { product: state.product };
  },  
  (dispatch: Dispatch): Pick<ProductPage.IProps, 'actions' | 'systemActions'> => ({
    actions: bindActionCreators(omit(ProductActions, 'Type'), dispatch),
    systemActions: bindActionCreators(omit(AppSystemActions, 'Type'), dispatch),
  })
)

export default class ProductSinglePage extends React.Component<any> {
  public componentDidMount() {
    this.fetchProductContent(this.props.match.params.slug);
  }    
  public render() {
    return (
      <ProductSinglePageComp product={this.props.product} match={this.props.match}/>
    );
  }

  public fetchProductContent = (urlSlug: string) => {    
    const { actions, systemActions } = this.props;
    const url = `${process.env.api_path}/productbyslug/` + urlSlug;
    systemActions.loadingStart({loading: true})     
    return fetch(url)
    .then(res => res.json())
    .then(body => {
        actions.fetchProductSuccess(body)
        systemActions.loadingEnd({loading: false})
    })
    .catch(err => console.log(err))    
  }
}


