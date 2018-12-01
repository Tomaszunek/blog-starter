import { combineReducers } from 'redux';
import { IRootState, RootState } from './state';

export { IRootState, RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({  
});