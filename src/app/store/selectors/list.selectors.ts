import { createFeatureSelector } from '@ngrx/store';
import { TextListState } from '../state/list.state';

export const selectTextList = createFeatureSelector<TextListState>('textList');
