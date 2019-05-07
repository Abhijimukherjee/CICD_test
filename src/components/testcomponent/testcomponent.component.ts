import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.scss']
})
export class testcomponent  {
  Displaytext='Hello'
  tcode : string;

  public changeLabel() {
   this.Displaytext=this.tcode;       
}  
  constructor() {}
  ngOnInit() {}

}
