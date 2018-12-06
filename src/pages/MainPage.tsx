import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { MainPageContentActions, ArticleActions } from '../actions';
import { ArticleFiltes } from '../models';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import '../App.scss';
import MainPageComp from 'src/components/MainPage/MainPageComp';

const FILTER_VALUES = (Object.keys(ArticleFiltes.Filter) as 
  (keyof typeof ArticleFiltes.Filter)[]).map(
  (key) => ArticleFiltes.Filter[key]
);


export namespace MainPage {
  export interface IProps extends RouteComponentProps<void> {
    mainPageContent: RootState.MainPageContentState;
    actions: MainPageContentActions;
    articleActions: ArticleActions;
    filter: ArticleFiltes.Filter;
  }
}

@connect(
  (state: IRootState, ownProps): Pick<MainPage.IProps, 'mainPageContent' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { mainPageContent: state.mainpageContent, filter };
  },  
  (dispatch: Dispatch): Pick<MainPage.IProps, 'actions' | 'articleActions'> => ({
    actions: bindActionCreators(omit(MainPageContentActions, 'Type'), dispatch),
    articleActions: bindActionCreators(omit(ArticleActions, 'Type'), dispatch)
  })
)

export default class MainPage extends React.Component<MainPage.IProps> {
  public componentDidMount() {
    this.fetchMainPageContent();
  }
  public render() {
    const { articles, products, slides } = this.props.mainPageContent; 
    return (
      <MainPageComp articles={articles} slides={slides} products={products}/>
    );
  }

public fetchMainPageContent = () => {    
  const { actions } = this.props;
  actions.fetchMPContentRequest({name: "abc"})
  return fetch('http://localhost:3002/api/mainpage-content')
  .then(res => res.json())
  .then(body => {
    actions.fetchMPContentSucesss(groupByType(body))
  })
  .catch(err => actions.fetchMPContentFailure({name: err}))
  } 
}

function groupByType(mainpageContent:any) {
const content = {
  articles: new Array, products: new Array, slides: new Array
};
mainpageContent.forEach((item: any) => {
  if(item.isSlider && item.AppArticle) {
    content.slides.push(item)
  } else if(item.AppProduct) {
    content.products.push(item)
  } else {
    content.articles.push(item)
  }
});
return {
  ...content
}
}
