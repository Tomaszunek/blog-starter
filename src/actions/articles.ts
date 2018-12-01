import { createAction } from 'redux-actions';
import { IArticle } from '../models';

export namespace ArticleActions {
  export enum Type {
    ADD_ARCICLE = 'ADD_COMMAND',
    EDIT_ARCICLE = 'EDIT_COMMAND',
    SET_ARCICLE = 'SET_COMMAND',
    DELETE_ARCICLE = 'DELETE_COMMAND'    
  }

  export const addCommand = createAction<PartialPick<IArticle, 'name'>>(Type.ADD_ARCICLE);
  export const editCommand = createAction<PartialPick<IArticle, 'name'>>(Type.EDIT_ARCICLE);
  export const setCommand = createAction<PartialPick<IArticle, "name">>(Type.SET_ARCICLE);
  export const deleteCommand = createAction<IArticle['name']>(Type.DELETE_ARCICLE);  
}

export type ArticleActions = Omit<typeof ArticleActions, 'Type'>;