import { combineReducers } from 'redux';
import { IRootState, RootState } from './state';
import { articleReducer } from './articleReducer';

export { IRootState, RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({
    articles: articleReducer as any,
});