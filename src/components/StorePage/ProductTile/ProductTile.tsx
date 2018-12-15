import * as React from 'react';
import './ProductTile.scss'
import { IProductModel } from '../../../models';
import CategoryTags from '../../template/categoryTags/categoryTags';

export default class ProductTile extends React.Component<IProductTilesProps, any> {
  constructor(props: IProductTilesProps) {
    super(props);    
  }

  public render() {         
    const { id, image, name, AppContentCategories, slug, type } = this.props.product;
    return (
    <div className="articleTile" data-attr={id}>
        <a href={`/product/${slug}`}>           
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
  }
}

export interface IProductTilesProps{
    product: IProductModel,
}


