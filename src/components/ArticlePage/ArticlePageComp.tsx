import * as React from 'react';
import './articlepage.scss'
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import ArticleContainer from './articleContainer/articleContainer';
import { IArticleModel } from 'src/models';

import image from 'src/logo.svg'

export default class ArticlePageComp extends React.Component<IArticlePageComp, any> {
  public render() {
    return (
      <main>
        <FullScreenCont>        
          <img src="./images/logos/greenBlack.png" alt=""/>  
          <img src={image} alt=""/>          
        </FullScreenCont>
        <ArticleContainer articles={this.props.articles} structure={[3,4,5,4,4]}/>        
      </main>
    );
  }
}

interface IArticlePageComp {
  articles: Array<IArticleModel>
}


