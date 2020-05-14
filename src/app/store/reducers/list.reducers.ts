import { initialStateTextList, TextListState } from '@app/store/state/list.state';
import { ListActions, ListActionsTypes } from '@app/store/actions/list.actions';

export function listReducer( state = initialStateTextList, action: ListActions ): TextListState {

  switch (action.type) {

    case ListActionsTypes.ADD_ITEM: {
      const list = state.list;
      list.push(action.text);
      return {
        ...state,
        list,
      };
    }

    case ListActionsTypes.EDIT_ITEM: {
      const list = state.list;
      list.splice(action.position, 1, action.newText);
      return {
        ...state,
        list,
      };
    }

    case ListActionsTypes.DELETE_ITEM: {
      const list = state.list;
      list.splice(action.position, 1);

      return {
        ...state,
        list,
      };
    }

    case ListActionsTypes.ROUTE_PARAM: {
      return {
        ...state,
        text: action.param
      };
    }

    default:
      return state;
  }
}
