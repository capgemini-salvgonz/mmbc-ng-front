// Core
import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// Material
import { MatTableDataSource } from '@angular/material/table';
// Bootstrap
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
// Chart.js
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';
// Spinner
import { NgxSpinnerService } from "ngx-spinner";
// App components
import { UserValidation } from '../utils/user.validation';
import { AccountService } from '../../service/account.service';
import { Account } from 'src/app/model/account.model';
// App constants
import { PIE_CHART_OPTIONS, CHART_COLORS } from '../utils/chart.config';



@Component({
  selector: 'account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
  providers: [AccountService, NgbModalConfig, NgbModal]       
})
export class AccountComponent extends UserValidation{

  public account: Account = new Account();
  public accountToDelete: Account = new Account();
  public accountModalTitle: string;
  public isEditing: boolean = false;
  
  /** Account table configuration */
  public displayedColumns: string[] = ['Edit', 'Account', 'Description', 'Type', 'Balance', 'Movements'];
  public dataSource: any;
  public totalBalanceAmount: number = 0;
  /** END Account table configuration */

  
  /** Charts - General configuration */
  public chartLabels: Label[];
  public balances: SingleDataSet = [];  
  public chartColors = CHART_COLORS;
  /** END Charts - General configuration */ 
  
  /** Bar chart confituration */
  public barAreaLegend = false;
  public barAreaChartType: ChartType = 'bar';
  /** END Bar chart */

  /** Pie Chart configuration */  
  public pieChartOptions: ChartOptions = PIE_CHART_OPTIONS;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;   
  /** END Pie chart */

  /**
   * Constructor
   *  
   * @param _route 
   * @param _router 
   * @param _accountService 
   */
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _accountService: AccountService,
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {
    super(_route, _router);
  }

  /**
   * Validate User Session 
   * And retrieves account list for the logged user
   */
  ngOnInit(): void {
    this.spinner.show();
    this.validateUser();
    this.retrieveAccounts();        
  }

  /**
   * Consumes Account API in order to 
   * retrieve an account list 
   */
  retrieveAccounts(){
    this._accountService.getAccounts().subscribe(
      result => {
        this.dataSource = new MatTableDataSource<Account>(result);
        this.totalBalanceAmount = result.reduce((sum,current)=> sum + current.balance,0);
        this.chartLabels = result.map(account => account.description);        
        this.balances = [];
        this.balances = [...result.map(account => account.balance)];
        this.chartLabels.push('#');
        this.balances.push(0);
        this.spinner.hide();
      },
      error => {
        if(error.status == 403){
          // No authorized request, the user must to log in
          sessionStorage.removeItem("user");
          this._router.navigate(['login']);
        }
      }
    );
  }

  /**
   * 
   * @param value 
   */
  changeType(value:string){
    this.account.type = value;
  }

    /**
   * Add new account
   * @param content 
   */
  newAccount(content) {
    this.isEditing = false;
    this.accountModalTitle = "New account";
    this.account = new Account();
    this.account.type = "D";
    this.account.accountId = null;
    this.modalService.open(content);
  }

  /**
   * Edit existing account
   * @param accountToEdit 
   * @param content 
   */
  editAccount(accountToEdit: Account, content:any){
    this.isEditing = true;
    this.account = {...accountToEdit};
    this.account.type = accountToEdit.type;
    this.accountModalTitle = "Editing account";
    this.modalService.open(content);
  }

  /**
   * Save changes on modal window
   */
  saveChanges() {
    this.spinner.show();
    
    this._accountService.postAccount(this.account).subscribe(
      result => {         
        window.location.reload();
      },
      error => {        
        window.location.reload();
      }
    );
  }

  /**
   * Delete account
   * @param accountToDelete 
   */
  deleteAccount(accountToDelete: Account, confirm:any) {
    this.accountToDelete = accountToDelete;
    this.modalService.open(confirm);
  }

  commitAccountDeletion() {
    this.spinner.show();
    this._accountService.deleteAccout(this.accountToDelete).subscribe(
      result => {
        window.location.reload();        
      },
      error => {
        window.location.reload();
      }
    );
  }

  openBudget(){    
  }
}
