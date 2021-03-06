import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { MainPageContentActions, ArticleActions, AppSystemActions } from '../actions';
import { ArticleFiltes } from '../models';
import { IRootState, RootState } from '../reducers';
import { omit } from '../utils';
import '../App.scss';
import MainPageComp from '../components/MainPage/MainPageComp';

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
    systemActions: AppSystemActions;
    
  }
}

@connect(
  (state: IRootState, ownProps): Pick<MainPage.IProps, 'mainPageContent' | 'filter'> => {
    const hash = ownProps.location && ownProps.location.hash.replace('#', '');
    const filter = FILTER_VALUES.find((value) => value === hash) || ArticleFiltes.Filter.SHOW_ALL;
    return { mainPageContent: state.mainpageContent, filter };
  },  
  (dispatch: Dispatch): Pick<MainPage.IProps, 'actions' | 'articleActions' | 'systemActions'> => ({
    actions: bindActionCreators(omit(MainPageContentActions, 'Type'), dispatch),
    articleActions: bindActionCreators(omit(ArticleActions, 'Type'), dispatch),
    systemActions: bindActionCreators(omit(AppSystemActions, 'Type'), dispatch)
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
  const { actions, systemActions } = this.props;
  systemActions.loadingStart({loading: true})
  return fetch(`${process.env.api_path}/mainpage-content`)
  .then(res => res.json())
  .then(body => {
    actions.fetchMPContentSucesss(groupByType(body))
    systemActions.loadingEnd({loading: false})
  })
  .catch(err => actions.fetchMPContentFailure({name: err}))
  } 
}

function groupByType(mainpageContent:any) {
  const content = {
    articles: new Array, products: new Array, slides: new Array
  };
  mainpageContent.forEach((item: any) => {
    if(item.AppProduct) {
      item.AppProduct.AppContentCategories = extractCategories(item.AppProduct.AppContentCategories);
      content.products.push(item.AppProduct)    
    } else {
      item.AppContent.AppContentCategories = extractCategories(item.AppContent.AppContentCategories)
      if(item.isSlider) {        
        content.slides.push(item.AppContent)
      } else {
        content.articles.push(item.AppContent)
        
      }
    }
  });
  return {
    ...content
  }
}

function extractCategories(categories:any) {
  if(categories) {
    return categories.map((elm:any) => elm.AppCategory)
  } else {
    return [];
  }  
}
