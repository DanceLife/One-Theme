import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  queryString: string;
  newQueryString: Subject<any>;

  constructor() { 
    this.newQueryString = new Subject<any>(); 
    this.newQueryString
    .subscribe(
      (newQueryString)=>{
        this.queryString = newQueryString;
      }
    )
  }
}
