import { Injectable } from '@angular/core';
import { Http ,HttpModule,Response } from '@angular/http';
import { Employee } from './employee';
// import { Observable } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private handleError(error: Response) {
    return error.statusText;
  }
  selectedEmployee: Employee;
  constructor(private _http: Http) { }
 

  getdata() {
    return this._http
    .get('http://localhost:4200/api/Employee').pipe(
    map((response: Response) => {
      return response.json();
    }),
    catchError(this.handleError));
  } 
  postdata() {
    this.selectedEmployee={
      FirstName:"jkklk",
      LastName: "gfgfdg",
      City:"glhk"


    }
    return this._http
    .post('http://localhost:4200/api/Employee',this.selectedEmployee).pipe(
    map((response: Response) => {
      return response.json();
    }),
    catchError(this.handleError));
}
}