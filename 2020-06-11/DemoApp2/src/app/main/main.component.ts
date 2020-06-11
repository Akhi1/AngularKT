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
    console.log(this.emp.employees());
  }

  responsedata=false;

  send(){
    this.responsedata = true;
  }

  donotsend(){
    this.responsedata = false;
  }



}
