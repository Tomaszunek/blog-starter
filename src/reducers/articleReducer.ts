import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IArticle } from '../models';

const initialState: RootState.ArticleState = [
];

export const articleReducer = handleActions<RootState.ArticleState, IArticle>(
  {    
  },
  initialState
);
