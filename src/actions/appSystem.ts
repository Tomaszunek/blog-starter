import { createAction } from 'redux-actions';
import { IAppSystem } from '../models';

export namespace AppSystemActions {
  export enum Type {
    LOADING_START = 'LOADING_START',
    LOADING_END = 'LOADING_END'
  }

  export const loadingStart = createAction<PartialPick<IAppSystem, 'loading'>>(Type.LOADING_START);
  export const lodingEnd = createAction<PartialPick<IAppSystem, "loading">>(Type.LOADING_END);
}

export type AppSystemActions = Omit<typeof AppSystemActions, 'Type'>;