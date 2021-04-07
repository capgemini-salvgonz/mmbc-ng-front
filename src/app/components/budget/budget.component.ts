import { Component } from '@angular/core';
import { UserValidation } from '../utils/user.validation';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExpenseTypeService } from 'src/app/service/expenses.service';
import { ExpenseType } from 'src/app/model/expenseType.model';
import { FixedExpense } from 'src/app/model/fixedExpense.model';


@Component({
  selector: 'budget',
  templateUrl: 'budget.component.html',
  styleUrls: ['budget.component.css'],
  providers: [AccountService, ExpenseTypeService, NgbModalConfig, NgbModal] 
})
export class BudgetComponent extends UserValidation{

  public expenseTypes: ExpenseType[];
  public fixedExpense: FixedExpense = new FixedExpense();
  public expenseType: ExpenseType = new ExpenseType();

  /**
   * Constructor 
   * 
   * @param _route 
   * @param _router 
   * @param _accountService 
   * @param _expenseService 
   * @param config 
   * @param modalService 
   * @param spinner 
   */
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _accountService: AccountService,
    private _expenseService: ExpenseTypeService,
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {
    super(_route, _router);
  }

 /**
   * Validate User Session 
   */
  ngOnInit(): void {
    this.validateUser();
    this.getExpenseTypes();
  }

  /**
   * Get expense types
   */
  getExpenseTypes() {
    this._expenseService.getExpenseTypes().subscribe(
      result => {
        this.expenseTypes = [...result];
      },
      error => console.log(error)
    );
  }

  addFixedExpense() {
    this.fixedExpense.active = 1;
    let fixedExpense = new FixedExpense();
    fixedExpense = {...this.fixedExpense};
    this.fixedExpense = new FixedExpense();
    console.log(fixedExpense);
    window.location.reload();
  }
}