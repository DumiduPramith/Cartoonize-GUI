import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedianBlurComponent } from './components/median-blur/median-blur.component';
import { AptivThreshouldingComponent } from './components/aptiv-threshoulding/aptiv-threshoulding.component';
import { BilaterialComponent } from './components/bilaterial/bilaterial.component';
import { ColorQuantizationComponent } from './components/color-quantization/color-quantization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    MedianBlurComponent,
    AptivThreshouldingComponent,
    BilaterialComponent,
    ColorQuantizationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MedianBlurComponent,
    AptivThreshouldingComponent,
    BilaterialComponent,
    ColorQuantizationComponent,
  ],
})
export class FunctionsModule {}
