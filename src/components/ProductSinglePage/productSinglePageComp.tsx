import * as React from 'react';
import './productSinglePage.scss'
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import { match } from 'react-router';

export default class ProductSinglePageComp  extends React.Component<IProductSinglePageComp, any> {  
  public render() {
    return (
      <div className="productSinglePage">
        <BreadcrumbsTemplate match={this.props.match}/>
        ProductSinglePage
      </div>
    );
  }
}

interface IProductSinglePageComp {
  match: match<void>
}


