import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { liveUrlReducer } from './store/reducers/imageLiveUrl.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { spinnerReducer } from './store/reducers/imageSpinner.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    StoreModule.forRoot(
      { liveUrlChange: liveUrlReducer, loadSpinner: spinnerReducer },
      {}
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
