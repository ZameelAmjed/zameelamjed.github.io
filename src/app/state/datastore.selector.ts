import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './datastore.state';

export const selectExperianceFeature =
  createFeatureSelector<AppState>('experiance');

  export const selectMarkdownContentFeature =
  createFeatureSelector<AppState>('markdownContent');

export const selectExperiance = createSelector(
  selectExperianceFeature,
  (state: AppState) => state.experiance
);

export const selectMarkdownContent = createSelector(
  selectMarkdownContentFeature,
  (state: AppState) => state.markdownContent
);
