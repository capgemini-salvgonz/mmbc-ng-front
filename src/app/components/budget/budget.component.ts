import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatTableDataSource } from '@angular/material/table';

//Services
import { AccountService } from 'src/app/service/account.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ExpenseTypeService } from 'src/app/service/expenses.service';
import { UserValidation } from '../utils/user.validation';

//Model
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

  // Expenses list
  public displayedColumns: string[] = ['Expense type', 'Amount', 'Description' , 'Edit / Delete'];
  public dataSource: MatTableDataSource<FixedExpense>;


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
    this.spinner.show();
    this.validateUser();
    this.getExpenseTypes();
    this.getFixedExpenses();
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

  /**
   *  Get fixed expenses
   */
  getFixedExpenses() {
    this._expenseService.getFixedExpenses().subscribe(
      result => {
        this.dataSource = new MatTableDataSource<FixedExpense>(result);
        this.spinner.hide();
      },
      error => {
        console.log(error);
        this.spinner.hide();
      }
    );
  }

  /**
   * Add fixed expense
   */
  addFixedExpense() {
    this.spinner.show();
    this.fixedExpense.active = 1;
    let fixedExpense = new FixedExpense();
    fixedExpense = {...this.fixedExpense};
    
    this._expenseService.postFixedExpenses(this.fixedExpense).subscribe(
      result => {        
        window.location.reload();
      },
      error => {
        window.location.reload();
      }
    );
  }


  getExpenseTypeDescription(expenseTypeId:number): string{
    return this.expenseTypes.find(e => e.expenseTypeId == expenseTypeId).description;
  }
}
