import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'demo_angular';
  appLabelMin = "minLabel";
  appLabelMax = "maxLabel";

  doMinChange(counter:number){
    console.log("Min Change: "+counter);
  }

  doMaxChange(counter:number){
    console.log("Max Change: "+counter);
  }
}
