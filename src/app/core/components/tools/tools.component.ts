import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss'],
})
export class ToolsComponent {
  medianBlur = true;
  adptvTreshould = true;
  bilaterial = true;
  colorQuantization = true;

  medianBlurForm = this.formBuilder.group({});
  adptvTreshouldForm = this.formBuilder.group({});
  bilaterialForm = this.formBuilder.group({});
  colorQuantizationForm = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {}

  submit() {
    console.log(this.medianBlurForm);
  }
}
