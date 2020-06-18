import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private log: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  username
  password;
  loginResponse;
  login(){
    console.log("username = ",this.username,"password = ",this.password);
    this.log.login(this.username, this.password).subscribe(response =>{
      this.loginResponse = response;
      console.log("login response: ",this.loginResponse);
      if(this.loginResponse.active == "1"){
        this.log.setLoggedIn(true);
        this.router.navigate(['about']);
      }else{
        this.router.navigate(['login']);
      }
    });
  }

}
