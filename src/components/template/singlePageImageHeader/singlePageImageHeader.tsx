import * as React from 'react';
import { IContentCategory } from '../../../models/ContentCategory';
import './singlePageImageHeader.scss'
import CategoryTags from '../categoryTags/categoryTags';

export default class SinglePageImageHeader extends React.Component<ISinglePageImageHeaderProps, any> {
  constructor(props: any) {
    super(props)    
  }


  public render() {
    const { categories, name, createdAt, image, type} = this.props;
    return (
      <div className="headerPhoto">
        <img src={image} alt=""/>
        <div className="headerPhotoInfo">
            <p>{name}</p>
            <CategoryTags categories={categories} articleType={type}/>
            <p>{createdAt && createdAt.toString()}</p>
        </div>
      </div>
    );
  }  
}



interface ISinglePageImageHeaderProps {
  image: string,
  name: string,
  createdAt: Date,
  categories: Array<IContentCategory>,
  type: string
}