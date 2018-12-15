import { createAction } from 'redux-actions';
import { IArticleModel } from '../models';

export namespace AbilitiesActions {
  export enum Type {    
    FETCH_ABILITIES_SUCCESS = 'FETCH_ABILITIES_SUCCESS',
    FETCH_ABILITY_SUCCESS = 'FETCH_ABILITY_SUCCESS',
  } 

  
  export const fetchAbilitiesSucess = createAction<PartialPick<IArticleModel, "id">>(Type.FETCH_ABILITIES_SUCCESS);   
  export const fetchAbilitySucess = createAction<PartialPick<IArticleModel, "id">>(Type.FETCH_ABILITY_SUCCESS);   

}

export type AbilitiesActions = Omit<typeof AbilitiesActions, 'Type'>;