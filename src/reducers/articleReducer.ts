import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IArticleModel } from '../models';

const initialState: RootState.ArticleState = [
];

export const articleReducer = handleActions<RootState.ArticleState, IArticleModel>(
  {    
  },
  initialState
);
