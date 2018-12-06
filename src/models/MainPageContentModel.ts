import { IArticleModel } from './ArticleModel';
import { IProductModel } from './ProductModel';

export interface IMainPageContent {
    slides: Array<IArticleModel>,
    articles: Array<IArticleModel>,
    products: Array<IProductModel>
}    
  
export namespace IMainPageFiltres {    
}