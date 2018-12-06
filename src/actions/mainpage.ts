import { createAction } from 'redux-actions';
import { IMainPageContent } from 'src/models/MainPageContentModel';

export namespace MainPageContentActions {
  export enum Type {
    FETCH_MP_CONTENT_REQUEST = 'FETCH_MP_CONTENT_REQUEST',
    FETCH_MP_CONTENT_SUCCESS = 'FETCH_MP_CONTENT_SUCCESS',
    FETCH_MP_CONTENT_FAILURE = 'FETCH_MP_CONTENT_FAILURE'
  }

  export const fetchMPContentRequest = createAction<PartialPick<any, 'name'>>(Type.FETCH_MP_CONTENT_REQUEST);
  export const fetchMPContentSucesss = createAction<PartialPick<IMainPageContent, "slides" | "articles" | "products">>(Type.FETCH_MP_CONTENT_SUCCESS);
  export const fetchMPContentFailure = createAction<PartialPick<any, "name">>(Type.FETCH_MP_CONTENT_FAILURE);
}

export type MainPageContentActions = Omit<typeof MainPageContentActions, 'Type'>;