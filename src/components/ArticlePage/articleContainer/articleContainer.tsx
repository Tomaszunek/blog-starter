import * as React from 'react';
import ArticleTile from '../articleTile/articleTile';
import './articleContainer.scss'
import { IArticleModel, IProductModel } from 'src/models';


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
    const { structure, type, articles, products } = this.props;
    const arrayElem = (type === "articles" ?  articles : products);
    let indexElemMin = 0;
    let indexElemMax = 0;
    const newArray:any = [];
    const gridArr = ["grid-four", "grid-four" ,"grid-four", "grid-three", "grid-four", "grid-five"]
    if(arrayElem) {
      structure.forEach((item, index) => {
        newArray[index] = [];
        indexElemMax += item;
        for(const i in arrayElem) {
          if(arrayElem[i] && Number(i) >= indexElemMin && Number(i) < indexElemMax) {
            const elm = arrayElem[i]
            newArray[index].push(elm)
          }
        }
        indexElemMin += item;          
      })
    }
    return newArray.map((item:any, index:number) => {
      const gridClassName = gridArr[item.length];
      return (<div key={index} className={gridClassName}>      
        {
          item.map((elem:any) => (type === "articles" ?  
            <ArticleTile key={elem.id} article={elem} /> : 
            <ArticleTile key={elem.id} article={elem}/>
          ))
        }
      </div>)
    })
  }
}

export interface IArticleContainerProps{
    articles?: Array<IArticleModel>;
    products?: Array<IProductModel>
    type: "articles" | "products";
    structure: Array<number>;
}


