import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IProductModel } from '../models';
import { ProductActions } from '../actions';

const initialState: RootState.ProductsState = [
];

export const productsReducer = handleActions<RootState.ProductsState, IProductModel>(
  {
    [ProductActions.Type.FETCH_PRODUCTS_SUCCESS]: (state, action) => {
      if(action.payload) {
        return {
          ...state,
          ...action.payload
        }
      }      
      return state
    },    
  },
  initialState
);
