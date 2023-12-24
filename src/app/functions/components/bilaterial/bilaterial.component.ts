import { Component } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-bilaterial',
  templateUrl: './bilaterial.component.html',
  styleUrls: ['./bilaterial.component.scss'],
})
export class BilaterialComponent {
  //@ts-ignore
  form: FormGroup;
  constructor(private ctrlContainer: FormGroupDirective) {}
  ngOnInit() {
    this.form = this.ctrlContainer.form;
    this.form.addControl('', new FormControl(''));
  }
}
