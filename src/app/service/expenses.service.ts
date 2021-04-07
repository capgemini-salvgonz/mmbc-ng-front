import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { ExpenseType } from 'src/app/model/expenseType.model';
import { HttpUtil } from './utils/http.util';
import { FixedExpense } from '../model/fixedExpense.model';

@Injectable()
export class ExpenseTypeService extends HttpUtil {

  private expensesURL = environment.mmbcBackendUrl + "/expenses";
  private fixedExpensesURL = environment.mmbcBackendUrl + "/expenses/fixed";
  private expensesTypesURL = environment.mmbcBackendUrl + "/expenses/types";

  constructor (    
    private _http: HttpClient
  ) { 
    super();
  }

  getExpenseTypes(){
    return this._http.get(this.expensesTypesURL, {headers: this.createHeaders()}).pipe(
      map((response:any) => response as Array<ExpenseType>)
    );
  }

  getFixedExpenses() {
    return this._http.get(this.fixedExpensesURL, {headers: this.createHeaders()}).pipe(
      map((response:any) => response as Array<FixedExpense>)
    );
  }

  postFixedExpenses(fixedExpense: FixedExpense) {
    return this._http.post(this.fixedExpensesURL, fixedExpense,{headers: this.createHeaders()}).pipe(
      map(r=>r)
    );
  }
}
