import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '@app/store/state/app.state';
import { listReducer } from '@app/store/reducers/list.reducers';


export const appReducers: ActionReducerMap<AppState, any> = {
    textList: listReducer
}