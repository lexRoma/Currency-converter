import { GetCurrDataService } from './../get-curr-data.service';
import { AppComponent } from '../app.component';
import { Component, Input, OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';




@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})


export class FormComponent implements OnInit{

    // public currencyData: any;
    public currencies:any;
    public data: any;

    // response: any;

    currId: number = 0;
    
    currencyInput_1 = 0;
    currencyInput_2 = 0;

    currencyIndex_1 = 0;
    currencyIndex_2 = 0;
  
    disabledValue1 = false;
    disabledValue2 = false;


    options: any;
    public selectedOption1 = "UAH";
    public selectedOption2 = "USD";

    constructor(private _currData: GetCurrDataService) {}

    ngOnInit() {
        this._currData.getCurrData() ///  ?????
        .subscribe((response) => {
        this.currencies = response;
        // console.log(this.currencies)

        
        this.data = this._currData.getNewData()
        this.options = this._currData.getNewData()
        console.log(this.data)


        
        
        this._currData.getCurrIndex1(this.selectedOption1);
        this._currData.getCurrIndex2(this.selectedOption2);

        this._currData.calcCurrInputValue1(this.currencyInput_2);
        this._currData.calcCurrInputValue2(this.currencyInput_1);

    })}


    


    public selectedOptionChanged1( event: any): void {
        
        this._currData.calcCurrInputValue2(this.currencyInput_1);
        this._currData.getCurrIndex1(this.selectedOption1);
        this.currencyInput_1 = this._currData.calcCurrInputValue1(this.currencyInput_2);
        
    }

    public selectedOptionChanged2( event: any): void {   
        this._currData.calcCurrInputValue1(this.currencyInput_2);
        this._currData.getCurrIndex2(this.selectedOption2);
        
        this.currencyInput_2 = this._currData.calcCurrInputValue2(this.currencyInput_1);

        console.log('index',this.currencyIndex_2)
        
    }




    
    inputHandler1(event: any) { 
        this.currencyInput_1 = Number(event.target.value);

        this.currencyInput_2 = this._currData.calcCurrInputValue2(this.currencyInput_1);
    
        // this.currencyInput_2 = Number((this.currencyInput_1*(this.currencyIndex_1/this.currencyIndex_2)).toFixed(2));
        
    }

    
    inputHandler2(event: any) { 
        this.currencyInput_2 = Number(event.target.value);

        this.currencyInput_1 = this._currData.calcCurrInputValue1(this.currencyInput_2);
        // console.log('handler2',this.currencyInput_2,this.currencyIndex_2,this.currencyIndex_1)
   
        // this.currencyInput_1 = Number((this.currencyInput_2*(this.currencyIndex_2/this.currencyIndex_1)).toFixed(2));
        
    }

    
    clear(event: any) {
        this.currencyInput_1 = 0;
        this.currencyInput_2 = 0;
    }
    
};
