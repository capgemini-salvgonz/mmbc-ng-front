import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit(): void {
    try {
      if(sessionStorage.getItem("user")){
        this._router.navigate(['accounts']);
      }
    }catch(error){
      console.log("There is no active session");
    }
  }
}