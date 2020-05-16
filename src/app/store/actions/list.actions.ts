import { Action } from '@ngrx/store';

export enum ListActionsTypes {
  EDIT_ITEM = '[TextList] edit item list',
  ADD_ITEM= '[TextList] add item list',
  DELETE_ITEM = '[TextList] delete item list',
  ROUTE_PARAM= '[Route] save text route'
}


export class AddItem implements Action{
  readonly type =  ListActionsTypes.ADD_ITEM;
  constructor(public text: string){}
}

export class EditItem implements Action {

    readonly type = ListActionsTypes.EDIT_ITEM;
    constructor(public newText: string, public position: number){}
}


export class DeleteItem implements Action{
    readonly type = ListActionsTypes.DELETE_ITEM;
    constructor(public position: number){}
}

export class RouteParam implements Action{
  readonly type = ListActionsTypes.ROUTE_PARAM;
  constructor(public param: string){}
}

export type ListActions =  AddItem | EditItem | DeleteItem | RouteParam  ;
