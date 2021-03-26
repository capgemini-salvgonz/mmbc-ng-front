import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { User } from '../model/user.model';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UserService {
  
  private url: string = "http://ec2-3-16-135-225.us-east-2.compute.amazonaws.com:8080/api/user";


  constructor (
    private _http: HttpClient
  ) { 
  }

  getLoggedUser (tokenId: string) : Observable<User> {    
    let authorization = 'Bearer ' + tokenId;
    let httpHeaders = new HttpHeaders({
      'Authorization': authorization,
      'Content-Type' : 'application/json'
    });

    return this._http.get(this.url, {headers : httpHeaders}).pipe(
      map((response:any) => response as User)
    )
  }
}