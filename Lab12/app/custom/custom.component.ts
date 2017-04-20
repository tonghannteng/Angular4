import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom',
  // templateUrl: './custom.component.html',
  // styleUrls: ['./custom.component.css']
  template: `
    <ul><li *ngFor="let val of values"> {{val}} </li> </ul>
    <p appUpper>change to upper case</p>
    Hide Element <span appMyvisibility="">Hidden Content</span>
    <p appMycolor>Click to change color</p>
  `
})
export class CustomComponent implements OnInit {

  values = ['a', 'b', 'c', 'd', 'e'];

  constructor() { }

  ngOnInit() {
  }

}
