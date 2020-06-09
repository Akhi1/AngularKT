import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private data: DataService) { }

  subscribedMessage;

  ngOnInit(): void {
    this.data.currentMessage.subscribe(response =>{
      this.subscribedMessage = response;
      console.log(this.subscribedMessage);
    });
  }

  @Input() public messageFromParent;

  @Output() public messageToParent = new EventEmitter();

  myPostman(){
    this.messageToParent.emit('Hello parent bro');
  }

  public mySecret;
  mySecretMsg(){
    this.mySecret = "Are you spying me?";
    return this.mySecret;
  }


  listData = {"name":"Akhil"};
  newBroadcast(){
    this.data.updateMessage(this.listData);
  }

}
