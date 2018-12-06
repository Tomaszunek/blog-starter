import { createAction } from 'redux-actions';
import { IProductModel } from '../models';

export namespace ProductActions {
  export enum Type {
    ADD_PRODUCT = 'ADD_PRODUCT',
    EDIT_PRODUCT = 'EDIT_PRODUCT',
    SET_PRODUCT = 'SET_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
  }

  export const addCommand = createAction<PartialPick<IProductModel, 'name'>>(Type.ADD_PRODUCT);
  export const editCommand = createAction<PartialPick<IProductModel, 'name'>>(Type.EDIT_PRODUCT);
  export const setCommand = createAction<PartialPick<IProductModel, "name">>(Type.SET_PRODUCT);
  export const deleteCommand = createAction<IProductModel['name']>(Type.DELETE_PRODUCT);
  export const fetchProductSuccess = createAction<PartialPick<IProductModel, "body">>(Type.FETCH_PRODUCT_SUCCESS);    
}

export type ProductActions = Omit<typeof ProductActions, 'Type'>;