import * as React from 'react';
import './articleTile.scss'
import { IArticleModel, IProductModel } from 'src/models';
import CategoryTags from 'src/components/template/categoryTags/categoryTags';

export default class ArticleTile extends React.Component<IArticleTileProps, any> {
  constructor(props: IArticleTileProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    console.log(this.props.article)
    const item = (this.props.article ? this.props.article : this.props.product)
    if(item) {      
      const { id, image, name, AppContentCategories } = item;
      return (
        <div className="articleTile" data-attr={id}>        
          <img src={'./images/placeholders/' + image} alt=""/>
          <div className="tileCont">
            <CategoryTags categories={AppContentCategories}/>          
            <span>{name}</span>          
          </div>
        </div>
      );
    } else {
      return null
    }
  }
}

export interface IArticleTileProps{
    article?: IArticleModel,
    product?: IProductModel,
}


