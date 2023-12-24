import { createAction } from '@ngrx/store';

export enum ImageActionTypes {
  showLoading = '[image-display Component] show loading spinner',
  hideLoading = '[image-display Component] hide loading spinner',
}

export const imageSpinnerShow = createAction(
  '[image-display Component] show loading spinner'
);

export const imageSpinnerHide = createAction(
  '[image-display Component] hide loading spinner'
);
