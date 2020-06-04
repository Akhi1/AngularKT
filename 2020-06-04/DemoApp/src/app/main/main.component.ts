import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  offButton1 = true;
  offButton2 = true;

  data = [
    {"name": "Robin", "class":10, "school":"some school"},
    {"name": "Akhil", "class":10, "school":"some school"},
    {"name": "Martin", "class":10, "school":"some school"},
    {"name": "Brad", "class":10, "school":"some school"},
    {"name": "Shaw", "class":10, "school":"some school"},
  ];


}
