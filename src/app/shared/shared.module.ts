import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgDisplayComponent } from './components/img-display/img-display.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ImgDisplayComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
  exports: [ImgDisplayComponent],
})
export class SharedModule {}
