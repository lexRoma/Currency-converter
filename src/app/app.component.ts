import { Component, Injectable } from '@angular/core';
import {NewServiceService} from './new-service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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



// fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(function(result) {
  
//   return result.json()
// }).then(function (data) {
//   console.log(data)
// })
// var actualRates = {
//   USD: 0,
//   EUR: 0,
//   GBP: 0
// };

// export class ActualRates {
//   currencyName: string = '';
//   currencyRate: number = 0.00;
//   currencyId: number = 0;
//   response: any;
//   constructor(privat http: HttpClient) {

//   }
//   search() {
//     this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
//     .subscribe((response)=> {
//       this.response = response;
//       console.log(this.response);
//     }) 
//   }

  
// }

// async function getCurrencies() {
//     const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
//     const data = await response.json();
//     const result = await data;
    

//     actualRates.USD = result[24].rate;
//     actualRates.EUR = result[40].rate;
//     actualRates.GBP = result[25].rate;
//     console.log(actualRates);
// }
// getCurrencies();



// @Injectable({ providedIn: 'root' })
// export class AccountsHttpService {
//   constructor(private http: HttpClient) {}

//   getUsers(): Observable {
//     return this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
//   }
// }

