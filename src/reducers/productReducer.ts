import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IProductModel } from '../models';
import { ProductActions } from 'src/actions';

const initialState: RootState.ProductState = [
];

export const productReducer = handleActions<RootState.ProductState, IProductModel>(
  {
    [ProductActions.Type.FETCH_PRODUCT_SUCCESS]: (state, action) => {
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
