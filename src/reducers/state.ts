import { IArticle } from '../models';

export interface IRootState {
  articles: RootState.ArticleState;
  router?: any;
}

export namespace RootState {
  export type ArticleState = Array<IArticle>;
}