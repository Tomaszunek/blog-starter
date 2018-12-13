import * as React from 'react';
import './productSinglePage.scss'
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import { match } from 'react-router';
import { IProductModel } from '../../models';

export default class ProductSinglePageComp  extends React.Component<IProductSinglePageComp, any> {  
  public render() {
    const { image } = this.props.product;
    console.log(this.props)
    return (
      <div className="articleSinglePage">
        <FullScreenCont>        
          <img src={`/images/placeholders/${image}`}  alt=""/>
        </FullScreenCont>
        <BreadcrumbsTemplate match={this.props.match}/>
        ProductSinglePage
      </div>
    );
  }
}

interface IProductSinglePageComp {
  match: match<void>,
  product: IProductModel
}


