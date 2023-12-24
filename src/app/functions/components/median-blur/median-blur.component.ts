import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-median-blur',
  templateUrl: './median-blur.component.html',
  styleUrls: ['./median-blur.component.scss'],
})
export class MedianBlurComponent {
  //@ts-ignore
  form: FormGroup;
  constructor(private ctrlContainer: FormGroupDirective) {}
  ngOnInit() {
    this.form = this.ctrlContainer.form;
    this.form.addControl('kernal', new FormControl(''));
  }
}
