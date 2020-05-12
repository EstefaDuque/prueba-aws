import { IListState, initialStateList } from './list.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface IAppState{
    router?: RouterReducerState;
    list: IListState;
}
