import { createAction } from 'redux-actions';
import { IProductModel } from '../models';

export namespace ProductActions {
  export enum Type {
    ADD_PRODUCT = 'ADD_COMMAND',
    EDIT_PRODUCT = 'EDIT_COMMAND',
    SET_PRODUCT = 'SET_COMMAND',
    DELETE_PRODUCT = 'DELETE_COMMAND'    
  }

  export const addCommand = createAction<PartialPick<IProductModel, 'name'>>(Type.ADD_PRODUCT);
  export const editCommand = createAction<PartialPick<IProductModel, 'name'>>(Type.EDIT_PRODUCT);
  export const setCommand = createAction<PartialPick<IProductModel, "name">>(Type.SET_PRODUCT);
  export const deleteCommand = createAction<IProductModel['name']>(Type.DELETE_PRODUCT);  
}

export type ProductActions = Omit<typeof ProductActions, 'Type'>;