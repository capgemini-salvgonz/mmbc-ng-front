import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/model/user.model';



export class UserValidation {

  public user: User;

  constructor(
    private _routes: ActivatedRoute,
    private _routers: Router,
  ){}

  validateUser() {
    try {
      this.user = JSON.parse(sessionStorage.getItem("user"));
      if(!this.user){        
        this._routers.navigate(['login']);
      }
    }catch(error){
      this._routers.navigate(['login']);
    }
  }
}