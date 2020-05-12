import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { listReducer } from './list.reducers';


export const appReducers: ActionReducerMap<IAppState, any> = {
    router : routerReducer,
    list: listReducer
}