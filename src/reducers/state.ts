import { IArticleModel, IProductModel } from '../models';
import { IMainPageContent } from 'src/models/MainPageContentModel';

export interface IRootState {
  articles: RootState.ArticleState;
  products: RootState.ProductState;
  mainpageContent: RootState.MainPageContentState;
  router?: any;
}

export namespace RootState {
  export type ArticleState = Array<IArticleModel>;
  export type ProductState = Array<IProductModel>;
  export type MainPageContentState = IMainPageContent;
}