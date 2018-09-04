import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  queryString: string;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.queryString = this.appService.queryString;
    this.appService.newQueryString
    .subscribe(
      (queryString)=>{
        this.queryString = queryString;
        console.log("new query string: ", this.queryString);
      }
    )
    
  }

}
