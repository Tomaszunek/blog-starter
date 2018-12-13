import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IArticleModel } from '../models';
import { ArticleActions } from '../actions';

const initialState: RootState.ArticlesState = [  
];

export const articlesReducer = handleActions<RootState.ArticlesState, IArticleModel>(  
  {
    [ArticleActions.Type.FETCH_ARTICLES_SUCCESS]: (state, action) => {
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
