import * as React from 'react';
import './articleTile.scss'
import { IArticleModel, IProductModel } from 'src/models';
import CategoryTags from '../../template/categoryTags/categoryTags';

export default class ArticleTile extends React.Component<IArticleTileProps, any> {
  constructor(props: IArticleTileProps) {
    super(props);    
  }

  public render() {
    const item = (this.props.article ? this.props.article : this.props.product)
    if(item) {      
      const { id, image, name, AppContentCategories, slug, type } = item;
      return (
        <div className="articleTile" data-attr={id}>
          <a href={`${this.props.product ? "products" : "articles"}/${type}/${slug}`}>           
            <img src={'./images/placeholders/' + image} alt=""/>
            <div className="tileCont">
            {
              AppContentCategories && AppContentCategories.length ? 
                <CategoryTags categories={AppContentCategories} articleType={type}/>  :
                null        
            }
              <div>
                <span>{name}</span>
                {
                  (this.props.product ? <p>16.99$</p> : null)
                }              
              </div>
            </div>
          </a>       
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


