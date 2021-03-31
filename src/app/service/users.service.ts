import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { User } from '../model/user.model';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UserService {
  
  private userUrl: string = environment.mmbcBackendUrl + "/user";


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

    return this._http.get(this.userUrl, {headers : httpHeaders}).pipe(
      map((response:any) => response as User)
    )
  }
}