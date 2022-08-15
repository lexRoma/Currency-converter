import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";

import { GetCurrDataService } from '../../services/get-curr-data.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit{
    
    today: number = Date.now();
    

    constructor(private _currData: GetCurrDataService) {}

    response: any;
    currencies1:any;
    
    currencies:any;

    ngOnInit() {
        this._currData.getCurrData()
        .subscribe((response) => {
        this.currencies1 = response;
        

        
        this.response = this._currData.getData() 
        console.log(this.response)
        

        this.currencies = [
            {id: this.response[2].id, rate: this.response[2].rate},
            {id: this.response[3].id, rate: this.response[3].rate},
            {id: this.response[4].id, rate: this.response[4].rate}
        ]
    })
    }


    
        
      
};



