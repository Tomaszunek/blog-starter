import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ArticleActions } from '../actions';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import ArticleSinglePageComp from '../components/ArticleSinglePage/articleSinglePageComp';


export namespace ArticlePage {
  export interface IProps extends RouteComponentProps<void> {
    article: RootState.ArticleState;
    actions: ArticleActions;
  }
}

@connect(
  (state: IRootState): Pick<ArticlePage.IProps, 'article'> => {
    return { article: state.article };
  },  
  (dispatch: Dispatch): Pick<ArticlePage.IProps, 'actions'> => ({
    actions: bindActionCreators(omit(ArticleActions, 'Type'), dispatch)
  })
)

export default class ArticleSinglePage extends React.Component<any> {
  public componentDidMount() {
    this.fetchArticleContent(this.props.match.params.slug);
  }    
  public render() {
    return (
      <ArticleSinglePageComp article={this.props.article} match={this.props.match}/>
    );
  }

  public fetchArticleContent = (urlSlug: string) => {    
    const { actions } = this.props;
    const url = "http://localhost:3002/api/contentbyslug/" + urlSlug;       
    return fetch(url)
    .then(res => res.json())
    .then(body => actions.fetchArticleSucess(body))
    .catch(err => console.log(err))    
  }
}


