import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ArticleActions } from '../actions';
import { ArticleFiltes } from '../models';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import ArticlePageComp from '../components/ArticlePage/ArticlePageComp';

const FILTER_VALUES = (Object.keys(ArticleFiltes.Filter) as 
  (keyof typeof ArticleFiltes.Filter)[]).map(
  (key) => ArticleFiltes.Filter[key]
);


export namespace ArticlePage {
  export interface IProps extends RouteComponentProps<void> {
    articles: RootState.ArticlesState;
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
  public shouldComponentUpdate(nextProps:ArticlePage.IProps, nextState:any) {
    if(this.props.match.url !== nextProps.match.url) {
      const splitUrl = nextProps.match.url.split('/');
      this.fetchArticleContent(splitUrl[splitUrl.length - 1]);
      return true;
    }
    return false;
  }
  public render() {
    const { articles } = this.props;
    const newMatch = this.props.match;
    return (
      <ArticlePageComp articles={articles} match={newMatch}/>
    );
  }

  public fetchArticleContent = (urlType?: string) => {    
    const { actions, match } = this.props;
    let url = `${process.env.api_path}/contents-article`;
    const splitUrl = match.url.split('/');
    const splitedUrl = (urlType ? urlType : splitUrl[splitUrl.length - 1])
    if( match.path !== "/articles" ) {
      url =`${url}/${splitedUrl}`;
    }    
    return fetch(url)
    .then(res => res.json())
    .then(body => actions.fetchArticlesSucess(body))
    .catch(err => console.log(err))    
  }  
}



