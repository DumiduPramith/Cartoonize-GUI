import { Subscription } from 'rxjs';
import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-img-display',
  templateUrl: './img-display.component.html',
  styleUrls: ['./img-display.component.scss'],
})
export class ImgDisplayComponent {
  @Input() spinner = false;
  @Input() url = '';
  @Input() title = '';

  isDataLoadingServer = false;
  //@ts-ignore
  spinnerSubscription$: Subscription;
  spinnerSelector = this.store.select('loadSpinner');
  constructor(private store: Store<{ loadSpinner: boolean }>) {}

  ngOnInit() {
    this.spinnerSubscription$ = this.spinnerSelector.subscribe((data) => {
      this.isDataLoadingServer = data;
    });
  }

  ngOnDestroy() {
    if (this.spinnerSubscription$) {
      this.spinnerSubscription$.unsubscribe();
    }
  }
}
