import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults: string;
  newSearchResults: Subject<any>;
  queryString: string;
  newQueryString: Subject<any>;


  constructor() { 
    this.newSearchResults = new Subject<any>();
    this.newQueryString = new Subject<any>(); 
    this.newQueryString
    .subscribe(
      (newQueryString)=>{
        this.queryString = newQueryString;
      });
  }

  runSearch(queryString){
    console.log("Running search on: ", queryString.value);
    
    //Search results to be entered instead of queryString after implementation.
    this.searchResults = queryString.value;
    this.newSearchResults.next(this.searchResults);
}


}
