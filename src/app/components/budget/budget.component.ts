import { Component } from '@angular/core';
import { UserValidation } from '../utils/user.validation';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExpenseTypeService } from 'src/app/service/expenses.service';

@Component({
  selector: 'budget',
  templateUrl: 'budget.component.html',
  styleUrls: ['budget.component.css'],
  providers: [AccountService, ExpenseTypeService, NgbModalConfig, NgbModal] 
})
export class BudgetComponent extends UserValidation{
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

  getExpenseTypes() {
    this._expenseService.getExpenseTypes().subscribe(
      result => console.log(result),
      error => console.log(error)
    );
  }
}