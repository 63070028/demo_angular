import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent {

  @Input() step:number = 1;
  
  @Input() counter:number = 0;
  @Output() counterChange = new EventEmitter();  

  
  decrease(){
    this.counter-this.step >= 0 ? this.counter-=this.step:"";
    this.counterChange.emit(this.counter);
  }

  increase(){
    this.counter+this.step <= 200 ? this.counter+=this.step:"";
    this.counterChange.emit (this.counter);
  }
  
} 
