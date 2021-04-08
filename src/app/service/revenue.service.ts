import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { HttpUtil } from './utils/http.util';
import { Revenue } from '../model/revenue.model';


@Injectable()
export class RevenueService extends HttpUtil {

  private revenueURL = environment.mmbcBackendUrl + "/revenues";

  constructor (    
    private _http: HttpClient
  ) { 
    super();
  }

  getRevenues() {
    return this._http.get(this.revenueURL, {headers: this.createHeaders()}).pipe(
      map((response:any) => response as Array<Revenue>)
    );
  }

  postRevenueEntry(revenue : Revenue) {
    return this._http.post(this.revenueURL, revenue, {headers: this.createHeaders()}).pipe(
      map((response:any) => response as any)
    );
  }

}
