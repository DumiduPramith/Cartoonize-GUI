import { SafeUrl } from '@angular/platform-browser';
import { createAction, props } from '@ngrx/store';

export const changeLiveUrl = createAction(
  '[Image Upload Component] changeLiveUrl',
  props<{ url: SafeUrl }>()
);
