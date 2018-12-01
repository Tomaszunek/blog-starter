import { createAction } from 'redux-actions';
import { IArticleModel } from '../models';

export namespace ArticleActions {
  export enum Type {
    ADD_ARCICLE = 'ADD_COMMAND',
    EDIT_ARCICLE = 'EDIT_COMMAND',
    SET_ARCICLE = 'SET_COMMAND',
    DELETE_ARCICLE = 'DELETE_COMMAND'    
  }

  export const addCommand = createAction<PartialPick<IArticleModel, 'name'>>(Type.ADD_ARCICLE);
  export const editCommand = createAction<PartialPick<IArticleModel, 'name'>>(Type.EDIT_ARCICLE);
  export const setCommand = createAction<PartialPick<IArticleModel, "name">>(Type.SET_ARCICLE);
  export const deleteCommand = createAction<IArticleModel['name']>(Type.DELETE_ARCICLE);  
}

export type ArticleActions = Omit<typeof ArticleActions, 'Type'>;