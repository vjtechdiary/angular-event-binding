import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() { }

  clickSave(){
    window.alert('Document Saved');
  }

  clickAction(){
    window.alert('Action Clicked');
  }

  clickSavewithEvent(event){
    window.alert('Document Saved:' + event);
  }
}