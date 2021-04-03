import { Component } from '@angular/core';
import { UserValidation } from '../utils/user.validation';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'budget',
  templateUrl: 'budget.component.html',
  styleUrls: ['budget.component.css']
})
export class BudgetComponent extends UserValidation{
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
}