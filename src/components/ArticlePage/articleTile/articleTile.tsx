import * as React from 'react';
import './articleTile.scss'
import { IArticleModel } from 'src/models';
import CategoryTags from '../../template/categoryTags/categoryTags';

export default class ArticleTile extends React.Component<IArticleTileProps, any> {
  constructor(props: IArticleTileProps) {
    super(props);    
  }

  public render() {     
    const { id, image, name, AppContentCategories, slug, type } = this.props.article;
    return (
      <div className="articleTile" data-attr={id}>
        <a href={`article/${type}/${slug}`}>           
          <img src={'./images/placeholders/' + image} alt=""/>
          <div className="tileCont">
          {
            AppContentCategories && AppContentCategories.length ? 
              <CategoryTags categories={AppContentCategories} articleType={type}/>  :
              null        
          }
            <div>
              <span>{name}</span>                             
            </div>
          </div>
        </a>       
      </div>
    );    
  }
}

export interface IArticleTileProps{
    article: IArticleModel,
}


