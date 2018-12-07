import { createAction } from 'redux-actions';
import { IArticleModel } from '../models';

export namespace ArticleActions {
  export enum Type {
    ADD_ARCICLE = 'ADD_ARCICLE',
    EDIT_ARCICLE = 'EDIT_ARCICLE',
    SET_ARCICLE = 'SET_ARCICLE',
    DELETE_ARCICLE = 'DELETE_ARCICLE',
    FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS',
  } 

  export const addCommand = createAction<PartialPick<IArticleModel, 'name'>>(Type.ADD_ARCICLE);
  export const editCommand = createAction<PartialPick<IArticleModel, 'name'>>(Type.EDIT_ARCICLE);
  export const setCommand = createAction<PartialPick<IArticleModel, "name">>(Type.SET_ARCICLE);
  export const deleteCommand = createAction<IArticleModel['name']>(Type.DELETE_ARCICLE);
  export const fetchArticleSucess = createAction<PartialPick<IArticleModel, "id">>(Type.FETCH_ARTICLE_SUCCESS);   
}

export type ArticleActions = Omit<typeof ArticleActions, 'Type'>;