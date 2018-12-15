import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IArticleModel } from '../models';
import { AbilitiesActions } from '../actions';

const initialState: RootState.AbilitiesState = [  
];

export const abilitiesReducer = handleActions<RootState.AbilitiesState, IArticleModel>(  
  {
    [AbilitiesActions.Type.FETCH_ABILITIES_SUCCESS]: (state, action) => {
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
