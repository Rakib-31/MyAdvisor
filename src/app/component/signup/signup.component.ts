import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private loginService: LoginService) {

  }

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }

}
