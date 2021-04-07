import { Component, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {map} from 'rxjs/operators';

import { User } from '../../model/user.model';
import { UserService } from '../../service/users.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  providers: [UserService]
})
export class HomeComponent {

  public idToken: string;
  public user: User;
  
  
  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
    private _router: Router
  ){ }

  ngOnInit(): void {
    this._route.fragment
    .pipe(
      map(fragment => new URLSearchParams(fragment)),
      map(params => ({
        id_token: params.get('id_token'),        
      }))
    )
    .subscribe(res => {
      this.idToken = res.id_token;
    });

    console.log(this.idToken);

    if(!this.idToken){
      return;
    }

    this._userService.getLoggedUser(this.idToken)
    .subscribe(
      result => {        
        this.user = result;        
        sessionStorage.setItem("user", JSON.stringify(this.user));
        sessionStorage.setItem("tokenId", this.idToken);        
        this._router.navigate(['accounts']);
      },
      error => {
        console.log(error);
        if (!this.user){
          this._router.navigate(['login']);
        }
      }
    );
  }
}
