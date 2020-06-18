import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private log: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.log.setLoggedIn(false);
    this.router.navigate(['login']);
  }

}
