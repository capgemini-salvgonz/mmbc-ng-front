import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from 'rxjs/operators';

import { User } from '../../model/user.model';
import { UserService } from '../../service/users.service';

@Component({
  selector: 'configuration',
  templateUrl: './configuration.component.html',
  providers: [UserService]
})
export class ConfigurationComponent {
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
        console.log("[AccountComponent]: There is no active session");
        this._router.navigate(['login']);
      }
    }catch(error){      
      this._router.navigate(['login']);
    }
  }
}
