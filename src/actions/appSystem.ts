import { createAction } from 'redux-actions';
import { IAppSystem } from '../models';

export namespace AppSystemActions {
  export enum Type {
    LOADING_START = 'LOADING_START',
    LOADING_END = 'LOADING_END',
    ERROR_START = 'ERROR_START',
    ERROR_END = 'ERROR_END',
  }

  export const loadingStart = createAction<PartialPick<IAppSystem, "loading">>(Type.LOADING_START);
  export const loadingEnd = createAction<PartialPick<IAppSystem, "loading">>(Type.LOADING_END);
  export const errorStart = createAction<PartialPick<IAppSystem, 'error'>>(Type.ERROR_START);
  export const errorEnd = createAction<PartialPick<IAppSystem, "error">>(Type.ERROR_END);
}

export type AppSystemActions = Omit<typeof AppSystemActions, 'Type'>;