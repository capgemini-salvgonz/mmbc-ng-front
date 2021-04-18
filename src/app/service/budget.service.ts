import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { BudgetDashboard } from '../model/budgetDasboard.model';
import { HttpUtil } from './utils/http.util';


@Injectable()
export class BudgetService extends HttpUtil {
  
  private budgetUrl: string = environment.mmbcBackendUrl + "/budget";

  constructor (
    private _http: HttpClient
  ) { 
    super();
  }

  getBudgetDashboard() {
      
    let budgetDashboardURL = this.budgetUrl + "/dashboard";
    
    return this._http.get(budgetDashboardURL, {headers: this.createHeaders()}).pipe(
      map( (response:any) => response as BudgetDashboard)
    );
  }

}