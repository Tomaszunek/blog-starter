import { IArticleModel, IProductModel, IAppSystem } from '../models';
import { IMainPageContent } from 'src/models/MainPageContentModel';

export interface IRootState {
  articles: RootState.ArticlesState;
  products: RootState.ProductsState;
  abilities: RootState.AbilitiesState;
  projects: RootState.ProjectsState;
  article: RootState.ArticleState;
  product: RootState.ProductState;
  mainpageContent: RootState.MainPageContentState;
  appSystem: RootState.AppSystemState;
  router?: any;
}

export namespace RootState {
  export type ArticlesState = Array<IArticleModel>;
  export type ProductsState = Array<IProductModel>;
  export type ArticleState = IArticleModel;
  export type ProductState = IProductModel
  export type MainPageContentState = IMainPageContent;
  export type AbilitiesState = Array<IArticleModel>;
  export type ProjectsState = Array<IArticleModel>;
  export type AppSystemState = IAppSystem
}