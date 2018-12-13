import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IProductModel } from '../models';
import { ProductActions } from '../actions';

const initialState: RootState.ProductState = {
  body: "",
  createdAt: new Date,
  updatedAt: new Date,
  id: 0,
  image: "",
  name: "",
  slug: "",
  type: "",
  productType: ""
}


export const productReducer = handleActions<RootState.ProductState, IProductModel>(
  {
    [ProductActions.Type.FETCH_PRODUCT_SUCCESS]: (state, action) => {
      if(action.payload) {
        return {
          ...action.payload
        }
      }      
      return state
    },    
  },
  initialState
);
