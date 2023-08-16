import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img-display',
  templateUrl: './img-display.component.html',
  styleUrls: ['./img-display.component.scss'],
})
export class ImgDisplayComponent {
  @Input() spinner = false;
}
