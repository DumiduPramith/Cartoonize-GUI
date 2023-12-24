import { createReducer, on } from '@ngrx/store';
import {
  imageSpinnerHide,
  imageSpinnerShow,
} from '../actions/imageSpinner.actions';

export const spinnerInitialState = false;

export const spinnerReducer = createReducer(
  spinnerInitialState,
  on(imageSpinnerShow, (state, action) => true),
  on(imageSpinnerHide, (state, action) => false)
);
