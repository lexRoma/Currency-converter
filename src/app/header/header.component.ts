import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})


export class HeaderComponent {
    
    today: number = Date.now();
    

    constructor(private http: HttpClient) {
      
    }

    response: any;
    currId: number = 25;

    currency = this.http.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'+this.currId)
        .subscribe((response)=> {
        this.response = response;
        
    })
        
      
};



