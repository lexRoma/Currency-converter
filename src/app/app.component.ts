
import { Component, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  currName: string = "";
  currId: string = "";
  response: any;

  constructor() {

  }
  
}









