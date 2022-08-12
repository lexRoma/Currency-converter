
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

  constructor(private http: HttpClient) {

  }
  search() {
    this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'+this.currName)
    .subscribe((response)=> {
      this.response = response;
      console.log(response);
      console.log(this.response.cc)
    })

  }
}









