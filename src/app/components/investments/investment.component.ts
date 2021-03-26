import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/model/user.model';

@Component({
  selector: 'investment',
  templateUrl: './investment.component.html',
})
export class InvestmentComponent {
  public user: User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }

  ngOnInit(): void {    
    try {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      if(!this.user){
        this._router.navigate(['login']);
      }
    }catch(error){      
      this._router.navigate(['login']);
    }
  }
}
