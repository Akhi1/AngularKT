import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  // template: `<p>Hello World</p>`,
  templateUrl: './first.component.html',
  // styles: ['p{color: #00ff00}'],
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
