import * as React from 'react';
import './storePage.scss'
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import { IProductModel } from 'src/models';

import image from 'src/logo.svg'
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import { match } from 'react-router';
import ArticleContainer from '../ArticlePage/articleContainer/articleContainer';

export default class StorePageComp extends React.Component<IStorePageCompProps, any> {  
  public render() {
    const { products } = this.props;
    return (
      <main>
        <FullScreenCont>        
          <img src={image} alt=""/>          
        </FullScreenCont>
        <BreadcrumbsTemplate match={this.props.match}/>
        <ArticleContainer products={products} structure={[4,4]}/>        
      </main>
    );
  }
}

interface IStorePageCompProps {
  products: Array<IProductModel>,
  match: match<void>
}


