import { combineReducers } from 'redux';
import { IRootState, RootState } from './state';
import { articlesReducer } from './articlesReducer';
import { articleReducer } from './articleReducer';
import { productsReducer } from './productsReducer';
import { productReducer } from './productReducer';
import { mainpageReducer } from './mainPageReducer';

export { IRootState, RootState };

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<IRootState>({
    article: articleReducer as any,
    articles: articlesReducer as any,
    product: productReducer as any,
    products: productsReducer as any,
    mainpageContent: mainpageReducer as any,
});