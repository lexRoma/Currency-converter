import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CurrencyData } from '../models/currency-data';

@Injectable({
  providedIn: 'root'
})

export class GetCurrDataService {

  public response: any;
  currData: any;

  //===================

  currId: number = 0;
    
  currencyInput_1: number = 0;
  currencyInput_2: number = 0;

  currencyIndex_1: number = 0;
  currencyIndex_2: number = 0;

  disabledValue1 = true;
  disabledValue2 = true;


  constructor(private _http: HttpClient) {}

  

  getCurrData() : Observable<CurrencyData[]> {
    return this._http.get<CurrencyData[]>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  }
  
  newResponse = this.getCurrData()
  .subscribe((res)=> {
  this.response = res;})// it is used in getData!!
    

  getData() : Observable<CurrencyData[]> {
    
    
    this.currData = [
          { id: 'not-choosed', name: 'Оберіть валюту' },
          { id: 'UAH', name: 'UAH — Гривні', rate: 1 },
          { id: 'USD', name: 'USD — Долар США', rate: this.response[25].rate },
          { id: 'EUR', name: 'EUR — Евро', rate: this.response[32].rate },
          { id: 'GBP', name: 'GPB — Фунт стерлингов', rate: this.response[24].rate },
          
        ]
      console.log(this.response)
      return this.currData;

    

        // this.currencyIndex_1 = this.currData[1].rate;
        // console.log(this.currencyIndex_1)
        // return this.currencyIndex_1;
    

  }

  
  


  

  getNewData() {
    
    
    let currData = [
          { id: 'not-choosed', name: 'Оберіть валюту' },
          { id: 'UAH', name: 'UAH — Гривні', rate: 1 },
          { id: 'USD', name: 'USD — Долар США', rate: this.response[25].rate },
          { id: 'EUR', name: 'EUR — Евро', rate: this.response[32].rate },
          { id: 'GBP', name: 'GPB — Фунт стерлингов', rate: this.response[24].rate },
          
        ]
      // console.log(typeof(currData))
      return this.currData;

    
  }

  

  public getCurrIndex1(selectedOption1: string) {
    let currencies = (this.getNewData())

    // let selectedOption1 = "UAH"
    
    currencies.forEach((element: { id: string; name: string; rate: any; }) => {
      for (let index = 0; index < currencies.length; index++) {
         
          if (selectedOption1 == element.id) {
              this.currencyIndex_1 = Number(element.rate)
              console.log("selected opt",selectedOption1,"curr index",this.currencyIndex_1)
          }    
      }
    });
  }  

  public getCurrIndex2(selectedOption2: string) {
    let currencies = (this.getNewData())

    // selectedOption2 = "USD"

    // let input = this.myMethod(this.currencyInput_1);

    currencies.forEach((element: { id: string; name: string; rate: any; }) => {
      for (let index = 0; index < currencies.length; index++) {
         
          if (selectedOption2 == element.id) {
              this.currencyIndex_2 = Number(element.rate)
              console.log("selected opt",selectedOption2,"curr index",this.currencyIndex_2)
          }    
      }
    });
  }
  

  
  calcCurrInputValue2(currencyInput_1: number) {  //calc input2Value
    console.log(currencyInput_1); 
    console.log("index1", this.currencyIndex_1,"index2", this.currencyIndex_2)
    this.currencyInput_1 = currencyInput_1

    this.currencyInput_2 = Number((this.currencyInput_1*(this.currencyIndex_1/this.currencyIndex_2)).toFixed(2));
    return this.currencyInput_2
    
  }

  calcCurrInputValue1(currencyInput_2: number) {
    console.log(currencyInput_2); 
    this.currencyInput_2 = currencyInput_2

    this.currencyInput_1 = Number((this.currencyInput_2*(this.currencyIndex_2/this.currencyIndex_1)).toFixed(2));
    return this.currencyInput_1
    
  }


    
    
}

 
  
  


  




