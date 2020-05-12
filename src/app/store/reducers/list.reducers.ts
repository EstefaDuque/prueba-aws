import { filter } from 'rxjs/operators';
import { initialStateList, IListState } from './../state/list.state';
import { ListActions, ListActionsTypes } from './../actions/list.actions';
import { Action } from '@ngrx/store';

export function listReducer(
  state = initialStateList,
  action: ListActions
): IListState {
  switch (action.type) {
    case ListActionsTypes.EDIT_ITEM: {
      const list = action.payload.list;
      list.splice(action.payload.position, 1, action.payload.text);
      return {
        ...state,
        list,
      };
    }

    case ListActionsTypes.ADD_ITEM: {
      const list = action.payload.list;
      list.push(action.payload.text);
      return {
        ...state,
        list,
      };
    }

    case ListActionsTypes.DELETE_ITEM: {
      const list = action.payload.list;
      list.splice(action.payload.position, 1);

      return {
        ...state,
        list,
      };
    }

    case ListActionsTypes.ROUTE_PARAM: {
      return {
        ...state,
        text: action.param,
      };
    }

    default:
      return state;
  }
}
