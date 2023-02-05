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

  // activate: boolean = false;

  userList:string[] = ["kong", "tan", "dew", "earth"]

  doMinChange(counter:number){
    console.log("Min Change: "+counter);
  }

  doMaxChange(counter:number){
    console.log("Max Change: "+counter);
  }

  pushUser(){
    this.userList.push(`user${this.userList.length}`)
  }

  unshiftUser(){
    this.userList.unshift(`user${this.userList.length}`)
  }

  removeUser(index:number){
    this.userList.splice(index, 1)
  }
}
