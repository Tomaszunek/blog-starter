import { IArticleModel, IProductModel } from '../models';

export interface IRootState {
  articles: RootState.ArticleState;
  products: RootState.ProductState;
  router?: any;
}

export namespace RootState {
  export type ArticleState = Array<IArticleModel>;
  export type ProductState = Array<IProductModel>;
}