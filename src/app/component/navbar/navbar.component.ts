import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  user$: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth, private loginService: LoginService) {
    this.user$ = afAuth.authState;
    this.user$.subscribe(x => console.log(x));
  }
  logout() {
    this.loginService.logout();
  }
}
