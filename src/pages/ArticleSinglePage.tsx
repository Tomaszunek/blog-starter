import * as React from 'react';
import ArticleSinglePageComp from 'src/components/ArticleSinglePage/articleSinglePageComp';

export default class ArticleSinglePage extends React.Component<any> {    
  public render() {
    return (
      <ArticleSinglePageComp match={this.props.match}/>
    );
  }
}


