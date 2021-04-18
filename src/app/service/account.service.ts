import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { Account } from '../model/account.model';
import { HttpUtil } from './utils/http.util';


@Injectable()
export class AccountService extends HttpUtil {
  
  private accountUrl: string = environment.mmbcBackendUrl + "/accounts";

  constructor (
    private _http: HttpClient
  ) { 
    super();
  }

  getAccounts() {    
    return this._http.get(this.accountUrl, {headers: this.createHeaders()}).pipe(
      map( (response:any) => response as Array<Account>)
    );
  }

  postAccount(account: Account){
    this.createHeaders();
    return this._http.post(this.accountUrl, account, {headers: this.createHeaders()}).pipe(
      map((response:any) => response)
    );
  }

  deleteAccout(account: Account){    
    this.createHeaders();
    let deleteUrl = this.accountUrl+"/delete";
    
    return this._http.post(deleteUrl, account, {headers: this.createHeaders()}).pipe(
      map((response:any) => response)
    );
  }
  
}