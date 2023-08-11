import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedianBlurComponent } from './components/median-blur/median-blur.component';
import { AptivThreshouldingComponent } from './components/aptiv-threshoulding/aptiv-threshoulding.component';
import { BilaterialComponent } from './components/bilaterial/bilaterial.component';
import { ColorQuantizationComponent } from './components/color-quantization/color-quantization.component';



@NgModule({
  declarations: [
    MedianBlurComponent,
    AptivThreshouldingComponent,
    BilaterialComponent,
    ColorQuantizationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FunctionsModule { }
