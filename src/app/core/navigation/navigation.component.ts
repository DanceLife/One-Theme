import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { AppService } from "../../app.service";

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.component.html',
    styleUrls: [ 'navigation.component.scss' ]
})
export class NavigationComponent implements OnInit{
    
    searchForm: FormGroup;
    queryString = new FormControl();
    
    constructor(private router: Router, private appService: AppService){}

    ngOnInit(): void {
        this.searchForm = new FormGroup({
            'queryString': this.queryString
        })
        this.appService.newQueryString.next(this.queryString) 
    }

    OnSearch(){
        this.router.navigate(["/Search"]);
    }

}