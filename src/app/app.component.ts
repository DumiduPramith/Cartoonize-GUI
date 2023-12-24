import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cartoning';
  url = '';
  //@ts-ignore
  liveUrlSubscription$: Subscription;
  liveUrlSelector = this.store.select('liveUrlChange');
  constructor(private store: Store<{ liveUrlChange: string }>) {}

  ngOnInit() {
    this.liveUrlSubscription$ = this.liveUrlSelector.subscribe((data) => {
      this.url = data;
    });
  }
  ngOnDestroy() {
    if (this.liveUrlSubscription$) {
      this.liveUrlSubscription$.unsubscribe();
    }
  }
}
