import { IListState } from './../state/list.state';
import { Action } from '@ngrx/store';

export enum ListActionsTypes {
  EDIT_ITEM = '[List] edit list item',
  ADD_ITEM= '[List] add list item',
  DELETE_ITEM = '[List] delete',
  ROUTE_PARAM= '[Route] param'
}

export class EditItem implements Action {

    readonly type = ListActionsTypes.EDIT_ITEM;
    constructor(public payload: IListState){}
}

export class AddItem implements Action{
    readonly type =  ListActionsTypes.ADD_ITEM;
    constructor(public payload: IListState){}
}

export class DeleteItem implements Action{
    readonly type = ListActionsTypes.DELETE_ITEM;
    constructor(public payload: IListState){}
}

export class RouteParam implements Action{
  readonly type = ListActionsTypes.ROUTE_PARAM;
  constructor(public param: string){}
}
export type ListActions = EditItem | AddItem | DeleteItem | RouteParam;
