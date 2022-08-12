
import { Component, Input, OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';




@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit{
    
    constructor(private http: HttpClient) {}

    public currencyData: any;

    
    ngOnInit(): void {
        this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'+this.currId)
        .subscribe((response)=> {
        this.response = response;
        // console.log(response);
        })

        // console.log(this.currencyIndex_1, this.currencyIndex_2)

    }


    

    response: any;
    currId: number = 0;
    
    currencyInput_1 = 0;
    currencyInput_2 = 0;

    

    currencyIndex_1 = 0;
    currencyIndex_2 = 0;

    
    disabledValue1 = true;
    disabledValue2 = true;


    options = [
        { id: 'not-choosed', name: 'Оберіть валюту' },
        { id: 'UAH', name: 'UAH — Гривні' },
        { id: 'USD', name: 'USD — Долар США' },
        { id: 'EUR', name: 'EUR — Евро' },
        { id: 'GBP', name: 'GPB — Фунт стерлингов' }
    ];

    public selectedOption1 = "not-choosed";
    public selectedOption2 = "not-choosed";


    public selectedOptionChanged1( event: any): void {
      
        console.log(event)
        console.log(this.response)
        
        var currencies = [        
            {name: 'UAH', rate: 1},
            {name: 'USD', rate: this.response[25].rate},
            {name: 'EUR', rate: this.response[32].rate},
            {name: 'GBP', rate: this.response[24].rate}
        ]

        
        console.log(this.selectedOption1);

        currencies.forEach(element => {
            for (let index = 0; index < currencies.length; index++) {
               
                if (this.selectedOption1 === element.name) {
                    this.currencyIndex_1 = Number(element.rate)
                    // console.log(this.currencyIndex_1)
                } else {
                    // console.log("no")
                } 
                
                
                
            }
        });
        
        if (this.selectedOption1 == 'not-choosed') {
            this.disabledValue1 = true;
        } else {
            this.disabledValue1 = false;
        }
        
        
    }

    public selectedOptionChanged2( event: any): void {   
        
        // console.log(event)
        
        var currencies = [
                
            {name: 'UAH', rate: 1},
            {name: 'USD', rate: this.response[25].rate},
            {name: 'EUR', rate: this.response[32].rate},
            {name: 'GBP', rate: this.response[24].rate}
        ]
  
        console.log(this.selectedOption2);

        currencies.forEach(element => {
            for (let index = 0; index < currencies.length; index++) {
               
                if (this.selectedOption2 === element.name) {
                    this.currencyIndex_2 = Number(element.rate)
                    // console.log(this.currencyIndex_2)
                } else {
                    // console.log("no")
                } 
                
                
                
            }
        });
        console.log('index',this.currencyIndex_2)
        if (this.selectedOption2 == 'not-choosed') {
            this.disabledValue2 = true;
        } else {
            this.disabledValue2 = false;
        }
    }

    

    getValue1(value: string) {
        console.log(value)

        this.currencyInput_1 = Number(value)
    }
    getValue2(value: string) {
        console.log(value)

        this.currencyInput_2 = Number(value)
    }


    
    inputHandler1(event: any) {
        
        
        this.currencyInput_1 = Number(event.target.value);

        //================================================
        var currencies = [
                
            {name: "UAH", rate: 1},
            {name: "USD", rate: this.response[25].rate},
            {name: "EUR", rate: this.response[32].rate},
            {name: "GBP", rate: this.response[24].rate}
        ]

        

        this.currencyInput_2 = Number((this.currencyInput_1*(this.currencyIndex_1/this.currencyIndex_2)).toFixed(2));

        // console.log('index next',this.currencyIndex_1, this.currencyIndex_2); 
        
    }

    
    inputHandler2(event: any) {
        
        this.currencyInput_2 = Number(event.target.value);


        // console.log('handler2',this.currencyInput_2,this.currencyIndex_2,this.currencyIndex_1)
   
        this.currencyInput_1 = Number((this.currencyInput_2*(this.currencyIndex_2/this.currencyIndex_1)).toFixed(2));


        // console.log('handler2',this.currencyInput_1); 
        
    }

    
    clear(event: any) {
        this.currencyInput_1 = 0;
        this.currencyInput_2 = 0;
    }
    
};
