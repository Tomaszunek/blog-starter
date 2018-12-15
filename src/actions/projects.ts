import { createAction } from 'redux-actions';
import { IArticleModel } from '../models';

export namespace ProjectsActions {
  export enum Type {    
    FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS',
    FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS',
  } 

  
  export const fetchProjectsSucess = createAction<PartialPick<IArticleModel, "id">>(Type.FETCH_PROJECTS_SUCCESS);   
  export const fetchProjectSucess = createAction<PartialPick<IArticleModel, "id">>(Type.FETCH_PROJECT_SUCCESS);   

}

export type ProjectsActions = Omit<typeof ProjectsActions, 'Type'>;