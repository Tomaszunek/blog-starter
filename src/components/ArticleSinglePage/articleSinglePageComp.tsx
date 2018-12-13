import * as React from 'react';
import './articleSinglePage.scss'
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import { match } from 'react-router';
import { IArticleModel } from '../../models';

export default class ArticleSinglePageComp extends React.Component<IArticleSinglePageComp, any> {  
  public render() {
    const { image } = this.props.article;
    console.log(this.props)
    return (
      <div className="articleSinglePage">
        <FullScreenCont>        
          <img src={`/images/placeholders/${image}`}  alt=""/>
        </FullScreenCont>
        <BreadcrumbsTemplate match={this.props.match}/>
        ArticleSinglePage
      </div>
    );
  }
}

interface IArticleSinglePageComp {
  match: match<void>,
  article: IArticleModel
}


