
export interface IListState {
  list: Array<string> ;
  text?: string | null;
  position?: number | null;
}

export const initialStateList: IListState = {
  list: [],
  text: null,
  position: null
}
