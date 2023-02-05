import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.css']
})
export class MaxMinMeterComponent {
  @Input() labelMin:string = "None";
  @Input() labelMax:string = "None";

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();   


  eventMinChange(counter:number){
    this.minChange.emit(counter);
  }

  eventMixChange(counter:number){
    this.maxChange.emit(counter);
  }
}
