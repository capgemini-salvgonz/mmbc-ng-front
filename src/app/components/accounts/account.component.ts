import {Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../service/users.service';

import { User } from 'src/app/model/user.model';

@Component({
  selector: 'account',
  templateUrl: 'account.component.html',
  providers: [UserService]       
})
export class AccountComponent {
  public user: User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
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

  ngAfterViewInit(): void {
    console.log();    
  }
}
