import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  selectedFile: File = null;
  check = false;

  constructor(private loginService: LoginService, private http: HttpClient) {

  }

  save(value) {
    console.log(value);
    this.loginService.save(value);
  }

  login() {
    this.loginService.login();
  }

  logout() {
    this.loginService.logout();
  }

  onFileSelected(event) {
    this.selectedFile = (event.target.files[0]) as File;
    if (this.selectedFile.name) {
      this.check = true;
    }
    console.log('this is test' + this.selectedFile.name);
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('https://us-central1-myadvisor-ec2ce.cloudfunctions.net/upload', fd, {
      reportProgress: true,
      observe: 'events'
    })
    .subscribe(event => console.log(event),
    errors => console.log(errors));
  }

}
