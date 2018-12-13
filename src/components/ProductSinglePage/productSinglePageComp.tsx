import * as React from 'react';
import './productSinglePage.scss'
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import { match } from 'react-router';
import { IProductModel } from '../../models';
import SinglePageImageHeader from '../template/singlePageImageHeader/singlePageImageHeader';
import ContentBodyDisplay from '../template/contentBodyDisplay/contentBodyDisplay';

export default class ProductSinglePageComp  extends React.Component<IProductSinglePageComp, any> {  
  public render() {
    const { image, createdAt, AppContentCategories, name, type, body } = this.props.product;
    console.log(this.props)
    return (
      <div className="articleSinglePage">
        <FullScreenCont>
          <SinglePageImageHeader createdAt={createdAt}
            image={`/images/placeholders/${image}`}
            name={name}
            type={type}
            categories={AppContentCategories || []   
          } />      
        </FullScreenCont>
        <BreadcrumbsTemplate match={this.props.match}/>
        <ContentBodyDisplay body={body}/>
      </div>
    );
  }
}

interface IProductSinglePageComp {
  match: match<void>,
  product: IProductModel
}


