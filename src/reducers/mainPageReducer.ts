import { handleActions } from 'redux-actions';
import { MainPageContentActions } from '../actions';
import { RootState } from './state';

const initialState: RootState.MainPageContentState = {articles: [],products: [], slides:[]
};

export const mainpageReducer = handleActions<RootState.MainPageContentState,  any>(
  {
    [MainPageContentActions.Type.FETCH_MP_CONTENT_REQUEST]: (state, action) => {    
        return state
    },
    [MainPageContentActions.Type.FETCH_MP_CONTENT_SUCCESS]: (state, action) => {
        if(action.payload) {
            return action.payload
        }
        return state
    }, 
    [MainPageContentActions.Type.FETCH_MP_CONTENT_FAILURE]: (state, action) => {      
        return state
    },     
  },
  initialState
);


