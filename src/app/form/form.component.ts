import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import {NewServiceService} from '../new-service.service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit{
    // inputSelected = document.querySelector('input:focus').value;
    
    currencyInput_1 = 0;//inputCurr
    currencyInput_2 = 0;//outputCurr

    //=========================
    constructor(private http: HttpClient) {
        
    }

    //==========================
    response: any;
    currId: number = 0;

    USD = this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'+this.currId)
        .subscribe((response)=> {
        this.response = response;
        // console.log(response);
    })

    //========================
    

    
    
    select1 = document.getElementById('Select1');

    getValue1(value: string) {
        console.log(value)

        this.currencyInput_1 = Number(value)
    }
    getValue2(value: string) {
        console.log(value)

        this.currencyInput_2 = Number(value)
    }



    inputHandler1(event: any) {
        // console.log(event)
        
        this.currencyInput_1 = event.target.value

        //================================================
        var currencies = [
                
            {name: "UAH", rate: 1},
            {name: "USD", rate: this.response[25].rate},
            {name: "EUR", rate: this.response[32].rate},
            {name: "GBP", rate: this.response[24].rate}
        ]

        var inputIndex = 1;
        var outputIndex = this.response[25].rate;
        //================================================


        this.currencyInput_2 = Number((this.currencyInput_1*(inputIndex/outputIndex)).toFixed(2));

        var inputSelected  = document.querySelector('input:focus');

        // console.log(this.inputCurr, this.outputCurr); 
        
    }

    inputHandler2(event: any) {
        // console.log(event)
        
        this.currencyInput_2 = event.target.value

        //================================================
        var currencies = [
                
            {name: "UAH", rate: 1},
            {name: "USD", rate: this.response[25].rate},
            {name: "EUR", rate: this.response[32].rate},
            {name: "GBP", rate: this.response[24].rate}
        ]

        var inputIndex = 1;
        var outputIndex = this.response[25].rate;
        //================================================


        this.currencyInput_1 = Number((this.currencyInput_2*(outputIndex/inputIndex)).toFixed(2));

        var inputSelected  = document.querySelector('input:focus');

        // console.log(this.inputCurr, this.outputCurr); 
        
    }

    
    ngOnInit(): void {
        
    }
    
    
    
};
