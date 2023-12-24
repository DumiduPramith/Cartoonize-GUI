import { SafeUrl } from '@angular/platform-browser';

export interface AppState {
  liveUrl: SafeUrl;
}

export const liveUrlSelector = (state: AppState) => state.liveUrl;
