import * as React from 'react';
import './articlepage.scss'
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import ArticleContainer from './articleContainer/articleContainer';
import { IArticleModel } from 'src/models';

import image from 'src/logo.svg'
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import { match } from 'react-router';

export default class ArticlePageComp extends React.Component<IArticlePageComp, any> {  
  public render() {
    const { articles } = this.props;
    return (
      <main>
        <FullScreenCont>        
          <img src={image} alt=""/>          
        </FullScreenCont>
        <BreadcrumbsTemplate match={this.props.match}/>
        <ArticleContainer articles={articles} structure={[4,4]}/>        
      </main>
    );
  }
}

interface IArticlePageComp {
  articles: Array<IArticleModel>,
  match: match<void>
}


