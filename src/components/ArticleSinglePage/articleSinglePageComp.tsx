import * as React from 'react';
import './articleSinglePage.scss'
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import { match } from 'react-router';
import { IArticleModel } from '../../models';
import SinglePageImageHeader from '../template/singlePageImageHeader/singlePageImageHeader';
import ContentBodyDisplay from '../template/contentBodyDisplay/contentBodyDisplay';

export default class ArticleSinglePageComp extends React.Component<IArticleSinglePageComp, any> {  
  public render() {
    const { image, createdAt, AppContentCategories, name, type, body, AppContentImages, AppContentModels } = this.props.article;
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
        <ContentBodyDisplay body={body} images={AppContentImages} models={AppContentModels}/>
      </div>
    );
  }
}

interface IArticleSinglePageComp {
  match: match<void>,
  article: IArticleModel
}


