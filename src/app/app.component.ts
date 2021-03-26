import { Component } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { User } from './model/user.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public user: User;  

  constructor(
  ){    
  }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }

  ngAfterViewInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }

  onLogged(event) {
    try{
      this.user = JSON.parse(sessionStorage.getItem("user"));
    }catch(error){
      console.log(error);
    }
  }  
}
