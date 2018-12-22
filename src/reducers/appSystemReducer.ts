import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IAppSystem } from '../models';
import { AppSystemActions } from '../actions';

const initialState: RootState.AppSystemState = {
    error: false,
    loading: false
};

export const appSystemReducer = handleActions<RootState.AppSystemState, IAppSystem>(  
  {
    [AppSystemActions.Type.LOADING_START]: (state, action) => {
      if(action.payload) {
        return {
            ...state,
            ...action.payload        
        }
      }      
      return state
    },
    [AppSystemActions.Type.LOADING_END]: (state, action) => {
        if(action.payload) {
          return {
              ...state,
              ...action.payload 
          }
        }      
        return state
      },    
      [AppSystemActions.Type.ERROR_START]: (state, action) => {
        if(action.payload) {
          return {
              ...state,
              ...action.payload        
          }
        }      
        return state
      },    
      [AppSystemActions.Type.ERROR_END]: (state, action) => {
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
