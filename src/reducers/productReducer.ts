import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IProductModel } from '../models';

const initialState: RootState.ProductState = [
];

export const productReducer = handleActions<RootState.ProductState, IProductModel>(
  {    
  },
  initialState
);
