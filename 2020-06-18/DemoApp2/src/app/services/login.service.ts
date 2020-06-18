import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post(`http://logintokenservice-mxaz.us-e2.cloudhub.io/login`,{
      "username":username,
      "password":password
    });
  }

  logInStatus = false;
  setLoggedIn(status: boolean){
    this.logInStatus = status;
  }

  getLoggedIn(){
    return this.logInStatus;
  }

}
