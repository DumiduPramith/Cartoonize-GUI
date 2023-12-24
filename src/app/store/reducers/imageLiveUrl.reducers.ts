import { createReducer, on } from '@ngrx/store';
import { changeLiveUrl } from '../actions/imageLiveUrl.actions';

export const imageLiveUrlInitialState: any = '';

export const liveUrlReducer = createReducer(
  imageLiveUrlInitialState,
  on(changeLiveUrl, (state, action) => {
    return action.url;
  })
);
