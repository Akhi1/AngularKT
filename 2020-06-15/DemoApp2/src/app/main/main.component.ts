import { Component, OnInit } from '@angular/core';
import { EmpdataService } from '../services/empdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private emp: EmpdataService ) { }

  retrievedEmpData;
  ngOnInit(): void {
    this.retrievedEmpData = this.emp.employees();
    console.log(this.retrievedEmpData);
  }

  responsedata=false;

  send(){
    this.responsedata = true;
  }

  donotsend(){
    this.responsedata = false;
  }


  id; userid; title; body;
  loading = false;
  postResponse;
  postData(){
    this.loading=true;
    this.emp.postData(this.userid, this.id, this.title, this.body).subscribe(response => {
      this.postResponse = response;
      console.log(this.postResponse);
      this.loading=false;
    },error => {
      this.loading=false;
      console.log(error);
    });
  }



}
