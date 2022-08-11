import { Component, OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';

import {NewServiceService} from '../new-service.service';


@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit{
    // inputSelected = document.querySelector('input:focus').value;
    
    currencyInput_1 = 0;
    currencyInput_2 = 0;

    

    currencyIndex_1 = 0;
    currencyIndex_2 = 0;

    //=========================
    constructor(private http: HttpClient) {
        
    }


    response: any;
    currId: number = 0;

    USD = this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'+this.currId)
        .subscribe((response)=> {
        this.response = response;
        // console.log(response);
    })

    //==========================

    options = [
        { id: 'UAH', name: 'UAH — Гривні' },
        { id: 'USD', name: 'USD — Долар США' },
        { id: 'EUR', name: 'EUR — Евро' },
        { id: 'GBP', name: 'GPB — Фунт стерлингов' }
    ];
    public selectedOption1 = "UAH";

    public selectedOption2 = "USD";


    public selectedOptionChanged1( event: any): void {
        

        
        console.log(event)
        // console.log(typeof(this.selectedOption1))

        var currencies = [
                
            {name: 'UAH', rate: 1},
            {name: 'USD', rate: this.response[25].rate},
            {name: 'EUR', rate: this.response[32].rate},
            {name: 'GBP', rate: this.response[24].rate}
        ]

        // if (this.selectedOption == 'USD') {
        //     this.currencyIndex_1 = this.response[25].rate
        // }
        
        console.log(this.selectedOption1);

        currencies.forEach(element => {
            for (let index = 0; index < currencies.length; index++) {
               
                if (this.selectedOption1 === element.name) {
                    this.currencyIndex_1 = Number(element.rate)
                    console.log(this.currencyIndex_1)
                } else {
                    // console.log("no")
                } 
                
                
                
            }
        });
        // console.log(this.currencyIndex_1)
    }

    public selectedOptionChanged2( event: any): void {

        
        
        console.log(event)
        // console.log(typeof(this.selectedOption2))

        var currencies = [
                
            {name: 'UAH', rate: 1},
            {name: 'USD', rate: this.response[25].rate},
            {name: 'EUR', rate: this.response[32].rate},
            {name: 'GBP', rate: this.response[24].rate}
        ]

        // if (this.selectedOption == 'USD') {
        //     this.currencyIndex_2 = this.response[25].rate
        // }
        
        console.log(this.selectedOption2);

        currencies.forEach(element => {
            for (let index = 0; index < currencies.length; index++) {
               
                if (this.selectedOption2 === element.name) {
                    this.currencyIndex_2 = Number(element.rate)
                    console.log(this.currencyIndex_2)
                } else {
                    // console.log("no")
                } 
                
                
                
            }
        });
        console.log('index',this.currencyIndex_2)
    }

    

    //========================
    


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
        
        this.currencyInput_1 = Number(event.target.value);

        //================================================
        var currencies = [
                
            {name: "UAH", rate: 1},
            {name: "USD", rate: this.response[25].rate},
            {name: "EUR", rate: this.response[32].rate},
            {name: "GBP", rate: this.response[24].rate}
        ]

        // var inputIndex = 1;
        // var outputIndex = this.response[25].rate;
        //================================================


        this.currencyInput_2 = Number((this.currencyInput_1*(this.currencyIndex_1/this.currencyIndex_2)).toFixed(2));

        console.log('index next',this.currencyIndex_1, this.currencyIndex_2); 
        
    }

    inputHandler2(event: any) {
        // console.log(event)
        
        this.currencyInput_2 = Number(event.target.value);

        //================================================
        // var currencies = [
                
        //     {name: "UAH", rate: 1},
        //     {name: "USD", rate: this.response[25].rate},
        //     {name: "EUR", rate: this.response[32].rate},
        //     {name: "GBP", rate: this.response[24].rate}
        // ]

        // var inputIndex: number = this.currencyIndex_1;
        // var outputIndex: number = this.currencyIndex_2;

        console.log('handler2',this.currencyInput_2,this.currencyIndex_2,this.currencyIndex_1)
        //================================================


        this.currencyInput_1 = Number((this.currencyInput_2*(this.currencyIndex_2/this.currencyIndex_1)).toFixed(2));

        // var inputSelected  = document.querySelector('input:focus');

        console.log('handler2',this.currencyInput_1); 
        
    }

    
    ngOnInit(): void {
        
    }
    
    clear(event: any) {
        this.currencyInput_1 = 0;
        this.currencyInput_2 = 0;
    }
    
};
