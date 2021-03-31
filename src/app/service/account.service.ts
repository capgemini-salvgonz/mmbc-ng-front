import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Account } from '../model/account.model';



@Injectable()
export class AccountService {
  
  private accountUrl: string = environment.mmbcBackendUrl + "/accounts";
  private authorization: string;
  private httpHeaders: HttpHeaders;

  constructor (
    private _http: HttpClient
  ) { }

  createHeaders() {
    this.authorization = "Bearer " + sessionStorage.getItem("tokenId");
    this.httpHeaders = new HttpHeaders({
      'Authorization': this.authorization,
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
  }

  getAccounts() {
    this.createHeaders();
    return this._http.get(this.accountUrl, {headers : this.httpHeaders}).pipe(
      map( (response:any) => response as Array<Account>)
    );
  }

  postAccount(account: Account){
    this.createHeaders();
    return this._http.post(this.accountUrl, account, {headers: this.httpHeaders}).pipe(
      map((response:any) => response)
    );
  }

  deleteAccout(account: Account){    
    this.createHeaders();
    let deleteUrl = this.accountUrl+"/delete";
    console.log(deleteUrl);
    
    return this._http.post(deleteUrl, account, {headers: this.httpHeaders}).pipe(
      map((response:any) => response)
    );
  }
}