import * as React from 'react';
import './articleSinglePage.scss'
import BreadcrumbsTemplate from '../template/breadcrumbs/breadcrumbs';
import { match } from 'react-router';

export default class ArticleSinglePageComp extends React.Component<IArticleSinglePageComp, any> {  
  public render() {
    return (
      <div className="articleSinglePage">
          <BreadcrumbsTemplate match={this.props.match}/>
          ArticleSinglePage
      </div>
    );
  }
}


interface IArticleSinglePageComp {
  match: match<void>
}


