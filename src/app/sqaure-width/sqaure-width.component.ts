import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaure-width',
  templateUrl: './sqaure-width.component.html',
  styleUrls: ['./sqaure-width.component.css']
})
export class SqaureWidthComponent {

  @Input() width_sqaure:number = 0;
  @Input() height_sqaure:number = 0;

  changeWidth(value:number){
    this.width_sqaure = value;
  }

}
