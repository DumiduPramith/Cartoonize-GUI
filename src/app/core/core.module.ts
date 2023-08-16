import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ImgUploadComponent } from './components/img-upload/img-upload.component';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToolsComponent } from './components/tools/tools.component';
import { FunctionsModule } from '../functions/functions.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent, ImgUploadComponent, ToolsComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    DragDropModule,
    MatSlideToggleModule,
    FunctionsModule,
    FormsModule,
  ],
  exports: [NavbarComponent, ImgUploadComponent, ToolsComponent],
})
export class CoreModule {}
