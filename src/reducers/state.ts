import { IArticleModel, IProductModel } from '../models';
import { IMainPageContent } from 'src/models/MainPageContentModel';

export interface IRootState {
  articles: RootState.ArticlesState;
  products: RootState.ProductsState;
  article: RootState.ArticleState;
  product: RootState.ProductState;
  mainpageContent: RootState.MainPageContentState;
  router?: any;
}

export namespace RootState {
  export type ArticlesState = Array<IArticleModel>;
  export type ProductsState = Array<IProductModel>;
  export type ArticleState = IArticleModel;
  export type ProductState = IProductModel
  export type MainPageContentState = IMainPageContent;
}