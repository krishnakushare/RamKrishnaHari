import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Response } from '@angular/http';

//import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/filter';
import { User } from "./user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly rootUrl='http://localhost:4500';

  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User={
      UserName : user.UserName,
      Password :user.Password,
      Email: user.Email,
      FirstName : user.FirstName,
      LastName : user.LastName
          }
          return null;
        }

  loginUser(user : User){           
    const body: User={
      UserName : user.UserName,
      Password :user.Password
      }
                    
  return this.http.post(this.rootUrl + '/api/Employee', body);
  }
}
