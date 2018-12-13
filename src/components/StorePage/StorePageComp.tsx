import * as React from 'react';
import './storePage.scss'
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import { IProductModel } from 'src/models';

import image from '../../logo.svg'
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import { match } from 'react-router';
import ArticleContainer from '../ArticlePage/articleContainer/articleContainer';
import SearchBarBlog, {AricleTypes, SearchContentType} from '../template/searchBar/searchBarBlog';

export default class StorePageComp extends React.Component<IStorePageCompProps, any> {  
  public render() {
    const { products } = this.props;
    return (
      <main>
        <FullScreenCont>        
          <img src={image} alt=""/>          
        </FullScreenCont>
        <SearchBarBlog searchContentType={SearchContentType.product} articleType={AricleTypes.motivation} />         
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


