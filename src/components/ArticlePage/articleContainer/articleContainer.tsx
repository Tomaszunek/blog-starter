import * as React from 'react';
import ArticleTile from '../articleTile/articleTile';
import './articleContainer.scss'
import { IArticleModel, IProductModel } from 'src/models';
import ProductTile from '../../StorePage/ProductTile/ProductTile';

export default class ArticleContainer extends React.Component<IArticleContainerProps, any> {
  constructor(props: IArticleContainerProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div className="articleConteiner">
        {this.displayItems()}
      </div>
    );
  }

  private displayItems = () => {
    const { structure, articles, products } = this.props;    
    let indexElemMin = 0;
    let indexElemMax = 0;
    const newArray:any = [];    
    const gridArr = ["grid-four", "grid-four" ,"grid-four", "grid-three", "grid-four", "grid-five"]
    let sasArray: Array<any> = [];
    if (products && articles) {
      sasArray = products;
      sasArray = sasArray.concat(articles);
    } else if(products) {
      sasArray = products;
    } else if (articles) {
      sasArray = articles;
    }
    structure.forEach((item, index) => {
      newArray[index] = [];
      indexElemMax += item;
      for(const i in sasArray) {
        if(sasArray[i] && Number(i) >= indexElemMin && Number(i) < indexElemMax) {
          const elm = sasArray[i]
          newArray[index].push(elm)
        }
      }
      indexElemMin += item;          
    })   
    
    return newArray.map((item:any, index:number) => {
      const gridClassName = gridArr[item.length];
      return (<div key={index} className={"grid " + gridClassName}>     
        {
          item.map((elem:any, ind: any) => (
            (elem.articleType ? 
              <ArticleTile key={ind} article={elem} /> : 
              <ProductTile key={ind} product={elem} />
            )
          ))
        }                 
      </div>)
    })
  }
}

export interface IArticleContainerProps{
    articles?: Array<IArticleModel>;
    products?: Array<IProductModel>
    structure: Array<number>;
}


