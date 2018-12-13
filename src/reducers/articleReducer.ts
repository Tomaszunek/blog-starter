import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IArticleModel } from '../models';
import { ArticleActions } from '../actions';

const initialState: RootState.ArticleState = {
  articleType: "",
  body: "",
  createdAt: new Date,
  updatedAt: new Date,
  id: 0,
  image: "",
  name: "",
  slug: "",
  type: ""
}


export const articleReducer = handleActions<RootState.ArticleState, IArticleModel>(  
  {
    [ArticleActions.Type.FETCH_ARTICLE_SUCCESS]: (state, action) => {
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
