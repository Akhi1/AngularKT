import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(this.todayDate);
  }

  text: string = "HelLo BrO, HoPe YoU Are FIne";
  someNumber = 23;

  someNumber1 = 93;
  myjson = [{"name":"Akhil","id":2201}];

  todayDate = new Date();

  imgUrl: string;

}
