import * as React from 'react';
import './articlepage.scss'
import FullScreenCont from '../template/fullScreenCont/fullSreenCont';
import ArticleContainer from './articleContainer/articleContainer';
import { IArticleModel } from 'src/models';
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import { match } from 'react-router';
import SearchBar, {AricleTypes, SearchContentType} from '../template/searchBar/searchBarBlog';

export default class ArticlePageComp extends React.Component<IArticlePageComp, any> {  
  public render() {
    const { articles } = this.props;
    return (
      <main>
        <FullScreenCont>        
          <img className="headerImage" src="../images/backgroundMainPages/news.jpg" alt=""/>
          <SearchBar searchContentType={SearchContentType.article} articleType={AricleTypes.motivation} />         
        </FullScreenCont>
        <BreadcrumbsTemplate match={this.props.match}/>
        <ArticleContainer articles={articles} 
                          structure={[4,4,4,4,4,4].filter((item, ind) => 
                            ind <= Math.floor(articles.length / 4)
        )}/>        
      </main>
    );
  }
}

interface IArticlePageComp {
  articles: Array<IArticleModel>,
  match: match<void>
}


