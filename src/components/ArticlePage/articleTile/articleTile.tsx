import * as React from 'react';
import './articleTile.scss'
import { IArticleModel } from 'src/models';

export default class ArticleTile extends React.Component<IArticleTileProps, any> {
  constructor(props: IArticleTileProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    const { id, image, name } = this.props.article;
    return (
      <div className="articleTile" data-attr={id}>        
        <img src={image} alt=""/>
        <div className="tileCont">
          <div className="categories">a</div>
          <span>{name}</span>          
        </div>
      </div>
    );
  }
}

export interface IArticleTileProps{
    article: IArticleModel
}


