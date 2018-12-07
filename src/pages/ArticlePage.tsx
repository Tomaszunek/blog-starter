import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ArticleActions } from '../actions';
import { ArticleFiltes } from '../models';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import ArticlePageComp from 'src/components/ArticlePage/ArticlePageComp';

const FILTER_VALUES = (Object.keys(ArticleFiltes.Filter) as 
  (keyof typeof ArticleFiltes.Filter)[]).map(
  (key) => ArticleFiltes.Filter[key]
);


export namespace ArticlePage {
  export interface IProps extends RouteComponentProps<void> {
    articles: RootState.ArticleState;
    actions: ArticleActions;
    filter: ArticleFiltes.Filter;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<ArticlePage.IProps, 'articles' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { articles: state.articles, filter };
  },  
  (dispatch: Dispatch): Pick<ArticlePage.IProps, 'actions'> => ({
    actions: bindActionCreators(omit(ArticleActions, 'Type'), dispatch)
  })
)

export default class ArticlePage extends React.Component<ArticlePage.IProps> {
  public componentDidMount() {
    this.fetchArticleContent();
  }     
  public render() {
    const { articles } = this.props;
    return (
      <ArticlePageComp articles={articles} match={this.props.match}/>
    );
  }

  public fetchArticleContent = () => {    
    const { actions, match } = this.props;
    let url = "http://localhost:3002/api/contents";
    const splitUrl = match.url.split('/');
    if( match.path !== "/articles" ) {
      url =`${url}/${splitUrl[splitUrl.length - 1]}`;
    }    
    return fetch(url)
    .then(res => res.json())
    .then(body => actions.fetchArticleSucess(body))
    .catch(err => console.log(err))    
  }
  
}



