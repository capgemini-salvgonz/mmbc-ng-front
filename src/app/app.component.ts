import { Component } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MMBC';

  private cognito: string = "https://mmbc-application-group.auth.us-east-2.amazoncognito.com/login?client_id=14a5gt4i7ueqeh1l1kllo6d10h&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://development.d2itkv569wz6b6.amplifyapp.com/home";

  onInit() {
  }
}
