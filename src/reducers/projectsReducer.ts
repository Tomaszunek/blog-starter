import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IArticleModel } from '../models';
import { ProjectsActions } from '../actions';

const initialState: RootState.ProjectsState = [  
];

export const projectsReducer = handleActions<RootState.ProjectsState, IArticleModel>(  
  {
    [ProjectsActions.Type.FETCH_PROJECTS_SUCCESS]: (state, action) => {
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
