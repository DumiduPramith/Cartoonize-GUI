import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SafeUrl } from '@angular/platform-browser';
import { changeLiveUrl } from 'src/app/store/actions/imageLiveUrl.actions';
import { imageSpinnerShow } from 'src/app/store/actions/imageSpinner.actions';

interface SelectedImageInterface {
  url: SafeUrl;
  file: File;
}

@Component({
  selector: 'app-img-upload',
  templateUrl: './img-upload.component.html',
  styleUrls: ['./img-upload.component.scss'],
})
export class ImgUploadComponent {
  //@ts-ignore
  image: SelectedImageInterface = {};

  constructor(
    private store: Store<{ liveUrlChange: string; loadSpinner: boolean }>
  ) {}

  onFileSelected(event: any) {
    if (event.target.files) {
      this.createUrl(event).then(() => {
        this.store.dispatch(changeLiveUrl({ url: this.image.url }));
        this.store.dispatch(imageSpinnerShow());
      });
    }
  }

  createUrl(event: any) {
    return new Promise<void>((resolve) => {
      const file = new FileReader();
      file.onload = (e: any) => {
        this.image = { url: e.target.result, file: event.target.files[0] };
        resolve();
      };
      file.readAsDataURL(event.target.files[0]);
    });
  }
}
