import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public messageFromParent;

  @Output() public messageToParent = new EventEmitter();

  myPostman(){
    this.messageToParent.emit('Hello parent bro');
  }

}
