
export interface TextListState {
  list: Array<string> ;
  text?: string | null;
  position?: number | null;
}

export const initialStateTextList: TextListState = {
  list: [],
  text: null,
  position: null
}
