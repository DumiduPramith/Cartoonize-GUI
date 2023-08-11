import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent, ImgUploadComponent],
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [NavbarComponent, ImgUploadComponent],
})
export class CoreModule {}
