import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';

export const selectList = createFeatureSelector<IAppState>('list');