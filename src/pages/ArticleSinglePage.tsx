import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ArticleActions, AppSystemActions } from '../actions';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import ArticleSinglePageComp from '../components/ArticleSinglePage/articleSinglePageComp';


export namespace ArticlePage {
  export interface IProps extends RouteComponentProps<void> {
    article: RootState.ArticleState;
    actions: ArticleActions;
    systemActions: AppSystemActions;
  }
}

@connect(
  (state: IRootState): Pick<ArticlePage.IProps, 'article'> => {
    return { article: state.article };
  },  
  (dispatch: Dispatch): Pick<ArticlePage.IProps, 'actions' | 'systemActions'> => ({
    actions: bindActionCreators(omit(ArticleActions, 'Type'), dispatch),
    systemActions: bindActionCreators(omit(AppSystemActions, 'Type'), dispatch)
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
    const { actions, systemActions } = this.props;
    const url = `${process.env.api_path}/contentbyslug/` + urlSlug;
    systemActions.loadingStart({loading: true})    
    return fetch(url)
    .then(res => res.json())
    .then(body => {
      actions.fetchArticleSucess(body)
      systemActions.loadingEnd({loading: false})
    })
    .catch(err => console.log(err))    
  }
}


