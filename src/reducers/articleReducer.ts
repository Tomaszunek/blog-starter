import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IArticleModel } from '../models';
import { ArticleActions } from 'src/actions';

const initialState: RootState.ArticleState = [  
];

export const articleReducer = handleActions<RootState.ArticleState, IArticleModel>(  
  {
    [ArticleActions.Type.FETCH_ARTICLE_SUCCESS]: (state, action) => {
      if(action.payload) {
        return state
      }
      return state 
    }, 
  },
  initialState
);
